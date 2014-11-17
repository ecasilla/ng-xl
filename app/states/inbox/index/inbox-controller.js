'use strict';

angular.module('bms')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('mail.inbox', stateFactory('Inbox', {
      url: '/inbox',
      templateUrl: 'states/mailinbox/index/main-view.html'
    }));
  })
  .controller('InboxCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
