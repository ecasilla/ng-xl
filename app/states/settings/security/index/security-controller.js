'use strict';

angular.module('bms')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('settings.security', stateFactory('Security', {
      url: '/security',
      templateUrl: 'states/settings/security/index/main-view.html'
    }));
  })
  .controller('SecurityCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
