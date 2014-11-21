'use strict';

describe('Controller(/email): EmailCtrl', function () {

  var EmailCtrl, scope;

  beforeEach(function () {

    module('bms');

    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      EmailCtrl = $controller('EmailCtrl', {
        $scope: scope
      });
    });
  });

  it('should attach init data to scope', function () {
    expect(scope.foo).toEqual('bar');
  });
});