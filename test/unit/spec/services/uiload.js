'use strict';

describe('Service: ui.load', function () {

  var ui.load;

  beforeEach(function () {

    module('bms');

    inject(function (_ui.load_) {
      ui.load = _ui.load_;
    });

  });


  it('should do something', function () {
    expect(!!ui.load).toBe(true);
  });

});