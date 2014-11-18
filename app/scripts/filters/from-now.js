'use strict';

/**
 * @ngdoc function
 * @name app.filter:fromNow
 * @description
 * need load the moment.js to use this filter. 
 * # fromNow
 * filter of the app
 */

angular.module('bms')
  .filter('fromNow', function () {
    return function (date) {
      return moment(data).formNow();
    };
  });
