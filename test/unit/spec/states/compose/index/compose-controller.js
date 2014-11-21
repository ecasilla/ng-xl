'use strict';

describe('Controller(/compose): ComposeCtrl', function () {

  var ComposeCtrl, scope;

  beforeEach(function () {

    module('bms');

    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ComposeCtrl = $controller('ComposeCtrl', {
        $scope: scope
      });
    });
  });

  it('should attach init data to scope', function () {
    expect(scope.foo).toEqual('bar');
  });
});