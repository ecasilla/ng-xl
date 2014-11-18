'use strict';

describe('Service: uiLoad', function () {

  var ui.load;

  beforeEach(function () {

    module('bms');

    inject(function (_uiLoad_) {
      uiLoad = _uiLoad_;
    });

  });


  it('should do something', function () {
    expect(!!uiLoad).toBe(true);
  });

});
