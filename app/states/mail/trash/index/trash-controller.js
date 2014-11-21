'use strict';

angular.module('bms')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('mail.trash', stateFactory('Trash', {
      url: '/trash',
      templateUrl: 'states/mail/trash/index/main-view.html'
    }));
  })
  .controller('TrashCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
