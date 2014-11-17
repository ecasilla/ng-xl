'use strict';

var components = angular.module('bms.components', []);
angular.componentFactory.moduleDecorator(components);

var app = angular.module('bms', [
  'kennethlynne.componentFactory',
  'ngAnimate',
  'ngSymbiosis.utils',
  'ngSymbiosis.routeProvider',
  'ngSymbiosis.repository',
  'ngSymbiosis.model',
  'bms.components',
  'ajoslin.promise-tracker',
  'cgBusy',
  'chieffancypants.loadingBar',
  'ui.router',
  'ui.bootstrap',
  'ngCookies',
  'ngResource',
  'restangular',
  'ngSanitize',
  'ngTouch',
  'xeditable',
  'ngStorage'
]);
angular.componentFactory.moduleDecorator(app);
