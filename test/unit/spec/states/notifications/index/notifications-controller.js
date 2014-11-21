'use strict';

describe('Controller(/notifications): NotificationsCtrl', function () {

  var NotificationsCtrl, scope;

  beforeEach(function () {

    module('bms');

    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      NotificationsCtrl = $controller('NotificationsCtrl', {
        $scope: scope
      });
    });
  });

  it('should attach init data to scope', function () {
    expect(scope.foo).toEqual('bar');
  });
});