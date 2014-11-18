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
  'mgcrea.ngStrap',
  'oc.lazyLoad',
  'ui.utils',
  'pascalprecht.translate',
  'ngCookies',
  'ngResource',
  'restangular',
  'ngSanitize',
  'ngTouch',
  'xeditable',
  'ngStorage'
]);

angular.componentFactory.moduleDecorator(app);

app.config(
  [        '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
  function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide) {
      
      // lazy controller, directive and service
      app.controller = $controllerProvider.register;
      app.directive  = $compileProvider.directive;
      app.filter     = $filterProvider.register;
      app.factory    = $provide.factory;
      app.service    = $provide.service;
      app.constant   = $provide.constant;
      app.value      = $provide.value;
  }
])
.config(['$translateProvider', function($translateProvider){
  // Register a loader for the static files
  // So, the module will search missing translation tables under the specified urls.
  // Those urls are [prefix][langKey][suffix].
  //$translateProvider.useStaticFilesLoader({
    //prefix: 'app/i18n/',
    //suffix: '.js'
  //});
  // Tell the module what language to use by default
  $translateProvider.preferredLanguage('en');
  // Tell the module to store the language in the local storage
  $translateProvider.useLocalStorage();
}]);
