'use strict';

describe('Filter: fromNow', function () {

  var fromNow;

  beforeEach(function () {

    module('bms');

    inject(function ($filter) {
      fromNow = $filter('fromNow');
    });

  });

  it('should return the input prefixed with "fromNow filter:"', function () {
  });

});
