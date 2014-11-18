'use strict';

describe('Service: MODULECONFIG', function () {

  var MODULECONFIG;

  beforeEach(function () {

    module('bms');

    inject(function (_MODULECONFIG_) {
      MODULECONFIG = _MODULECONFIG_;
    });

  });


  it('should do something', function () {
    expect(!!MODULECONFIG).toBe(true);
  });

});