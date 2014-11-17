'use strict';

angular.module('bms')
  .factory('AwesomeRepository', function ($injector, AwesomeModel) {
    var BaseRepository = $injector.get('BaseRepository');
    return new BaseRepository({name: 'AwesomeRepository', model: AwesomeModel});
  });
