'use strict';

angular.module('bms')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('settings.notifications', stateFactory('Notifications', {
      url: '/notifications',
      templateUrl: 'states/settings/notifications/index/main-view.html'
    }));
  })
  .controller('NotificationsCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
