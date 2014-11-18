'use strict';

describe('Directive: ui.jp', function () {

  var element, scope, $compile;

  beforeEach(function () {

    module('bms');

    inject(function ($rootScope, _$compile_) {
      scope = $rootScope.$new();
      $compile = _$compile_;
    });

  });

  it('should set text', function () {
    element = angular.element('<p ui.jp></p>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toBe('this is the ui.jp directive');
  });
});
