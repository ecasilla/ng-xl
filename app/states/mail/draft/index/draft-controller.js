'use strict';

angular.module('bms')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('mail.draft', stateFactory('Draft', {
      url: '/draft',
      templateUrl: 'states/mail/draft/index/main-view.html'
    }));
  })
  .controller('DraftCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
