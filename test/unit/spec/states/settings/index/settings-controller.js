'use strict';

describe('Controller(/settings): SettingsCtrl', function () {

  var SettingsCtrl, scope;

  beforeEach(function () {

    module('bms');

    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      SettingsCtrl = $controller('SettingsCtrl', {
        $scope: scope
      });
    });
  });

  it('should attach init data to scope', function () {
    expect(scope.foo).toEqual('bar');
  });
});