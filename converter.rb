require 'slop'
require 'pry'
require 'find'

opts = Slop.parse() do
  on :i, :input=, 'Filename'
  on :o, :output=, 'Directory'
end

unless opts.input? && opts.output?
  puts opts
  exit
end

opts.to_hash.each do |key, value|
  unless File.exist? opts[key]
    puts "Error: path  #{value}  does not exist"
    exit
  end
end

class Converter

  def initialize(input_path, output_path)
    @input_path = input_path.dup
    @output_path = output_path.dup
  end

  def parse
    is_directory = File.directory?(@input_path)
    if is_directory
      @input_path << '/' if @input_path[-1] != '/'
      @output_path << '/' if @output_path[-1] != '/'
      parse_directory(@input_path, @output_path)
    else
      parse_file(@input_path, @output_path)
    end
  end

  def parse_directory(input_path, output_path)
    Dir.glob(input_path+'*').each do |item|
      dir = File.directory?(item)
      if dir
        new_input_path = input_path + File.basename(item) + '/'
        new_output_path = output_path + File.basename(item) + '/'
        Dir.mkdir(new_output_path) unless File.exists?(new_output_path)
        parse_directory(new_input_path, new_output_path)
      end

      if !dir
        parse_file(item, output_path)
      end
    end
  end

  def parse_file(input_path, output_path)
    file_name = File.basename(input_path)
    f = File.open(input_path, 'r')
    f_out = File.open(output_path + file_name.sub(/\..+/, '.scss') , 'w+')
    replace_hash = {
    /@(?!(media|font-face|import|-webkit-keyframes|-moz-keyframes|-o-keyframes|keyframes|-ms-keyframes)\s)/ => '$',
    /\.([\w\-]*)\s*\((.*)\)\s*\{/ => '@mixin \1(\2){',
    /(?<=[\s\n])\.([\w\-]*\(.*\)\s*;)/ => '@include \1',
    /~"(.*)"/ => '#{"\1"}'
    }
    f.each_line do |line|
      replace_semicolon_in_mixin line
      replace_hash.each do |key, value|
        line = line.gsub(key,value)
      end
      f_out.write line
    end
  end

  def replace_semicolon_in_mixin(line)
    if index = /\.([\w\-]*)\s*\((.*)\)/.match(line)
      temp = index[2]
      temp = temp.gsub(/;/, ',')
      line[index.begin(2)...index.end(2)] = temp
    end
  end
end

c = Converter.new(opts[:input], opts[:output])
c.parse
