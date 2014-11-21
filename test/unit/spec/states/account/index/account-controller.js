'use strict';

describe('Controller(/account): AccountCtrl', function () {

  var AccountCtrl, scope;

  beforeEach(function () {

    module('bms');

    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      AccountCtrl = $controller('AccountCtrl', {
        $scope: scope
      });
    });
  });

  it('should attach init data to scope', function () {
    expect(scope.foo).toEqual('bar');
  });
});