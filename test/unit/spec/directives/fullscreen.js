'use strict';

describe('Directive: fullscreen', function () {

  var element, scope, $compile;

  beforeEach(function () {

    module('bms');

    inject(function ($rootScope, _$compile_) {
      scope = $rootScope.$new();
      $compile = _$compile_;
    });

  });

  it('should set text', function () {
    element = angular.element('<p fullscreen></p>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toBe('this is the fullscreen directive');
  });
});
