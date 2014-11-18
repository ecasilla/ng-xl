'use strict';

angular.module('bms')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('index', stateFactory('Index', {
      url: '/',
      controller: 'MainCtrl'
    }));
  })
  //.controller('IndexCtrl', function ($scope, AwesomeRepository) {
    //AwesomeRepository.getAll().then(function (awesomeThings) {
      //$scope.awesomeThings = awesomeThings;
    //});
  //});
