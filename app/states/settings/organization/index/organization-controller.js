'use strict';

angular.module('bms')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('settings.organization', stateFactory('Organization', {
      url: '/organization',
      templateUrl: 'states/settings/organization/index/main-view.html'
    }));
  })
  .controller('OrganizationCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
