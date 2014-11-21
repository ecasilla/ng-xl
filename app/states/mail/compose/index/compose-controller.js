'use strict';

angular.module('bms')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('mail.compose', stateFactory('Compose', {
      url: '/compose',
      templateUrl: 'states/mail/compose/index/main-view.html'
    }));
  })
  .controller('ComposeCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
