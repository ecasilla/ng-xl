'use strict';

angular.module('bms')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('faq', stateFactory('Faq', {
      url: '/faq',
      templateUrl: 'states/faq/index/main-view.html'
    }));
  })
  .controller('FaqCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
