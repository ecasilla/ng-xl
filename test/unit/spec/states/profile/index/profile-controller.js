'use strict';

describe('Controller(/profile): ProfileCtrl', function () {

  var ProfileCtrl, scope;

  beforeEach(function () {

    module('bms');

    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ProfileCtrl = $controller('ProfileCtrl', {
        $scope: scope
      });
    });
  });

  it('should attach init data to scope', function () {
    expect(scope.foo).toEqual('bar');
  });
});