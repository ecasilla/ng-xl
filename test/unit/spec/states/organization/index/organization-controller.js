'use strict';

describe('Controller(/organization): OrganizationCtrl', function () {

  var OrganizationCtrl, scope;

  beforeEach(function () {

    module('bms');

    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      OrganizationCtrl = $controller('OrganizationCtrl', {
        $scope: scope
      });
    });
  });

  it('should attach init data to scope', function () {
    expect(scope.foo).toEqual('bar');
  });
});