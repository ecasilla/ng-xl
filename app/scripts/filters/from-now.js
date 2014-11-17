'use strict';

angular.module('bms')
  .filter('fromNow', function () {
    return function (input) {
      return 'fromNow filter: ' + input;
    };
  });
