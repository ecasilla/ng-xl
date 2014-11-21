'use strict';

angular.module('states')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('email', stateFactory('Email', {
      url: '/email',
      templateUrl: 'states/email/index/main-view.html'
    }));
  })
  .controller('EmailCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
