'use strict';

angular.module('bms')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('user', stateFactory('User', {
      url: '/user',
      templateUrl: 'states/user/index/main-view.html'
    }));
  })
  .controller('UserCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
