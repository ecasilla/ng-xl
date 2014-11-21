'use strict';

angular.module('bms')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('settings', stateFactory('Settings', {
      url: '/settings',
      templateUrl: 'states/settings/index/main-view.html'
    }));
  })
  .controller('SettingsCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
