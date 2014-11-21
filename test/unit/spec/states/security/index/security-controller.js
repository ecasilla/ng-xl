'use strict';

describe('Controller(/security): SecurityCtrl', function () {

  var SecurityCtrl, scope;

  beforeEach(function () {

    module('bms');

    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      SecurityCtrl = $controller('SecurityCtrl', {
        $scope: scope
      });
    });
  });

  it('should attach init data to scope', function () {
    expect(scope.foo).toEqual('bar');
  });
});