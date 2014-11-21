'use strict';

angular.module('bms')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('settings.email', stateFactory('Email', {
      url: '/email',
      templateUrl: 'states/settings/email/index/main-view.html'
    }));
  })
  .controller('EmailCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
