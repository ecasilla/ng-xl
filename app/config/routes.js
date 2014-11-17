'use strict';

angular.module('bms')
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise("/error?code=404");
  });
