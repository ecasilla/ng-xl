'use strict';

angular.module('bms')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('settings.account', stateFactory('Account', {
      url: '/account',
      templateUrl: 'states/settings/account/index/main-view.html'
    }));
  })
  .controller('AccountCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
