'use strict';

angular.module('bms')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('support', stateFactory('Support', {
      url: '/support',
      templateUrl: 'states/support/index/main-view.html'
    }));
  })
  .controller('SupportCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
