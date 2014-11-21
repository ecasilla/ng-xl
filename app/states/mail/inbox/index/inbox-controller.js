'use strict';

angular.module('bms')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('mail.inbox', stateFactory('Inbox', {
      url: '/inbox',
      templateUrl: 'states/mail/inbox/index/inbox.html'
    }));
  })
  .controller('InboxCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
