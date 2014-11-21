'use strict';

angular.module('bms')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('mail.sent', stateFactory('Sent', {
      url: '/sent',
      templateUrl: 'states/mail/sent/index/main-view.html'
    }));
  })
  .controller('SentCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
