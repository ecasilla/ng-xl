'use strict';

angular.module('bms')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('index', stateFactory('Index', {
      url: '/',
      abstract:true,
      controller: 'MainCtrl',
      views: {
        '': {
          templateUrl: 'views/layout.html'
        },
        'aside': {
          templateUrl: 'views/partials/aside.nav.uikit.html'
        }
      }
    }));
  });
