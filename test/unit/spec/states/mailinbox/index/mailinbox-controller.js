'use strict';

describe('Controller(/mailinbox): MailInboxCtrl', function () {

  var MailInboxCtrl, scope;

  beforeEach(function () {

    module('bms');

    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      MailInboxCtrl = $controller('MailInboxCtrl', {
        $scope: scope
      });
    });
  });

  it('should attach init data to scope', function () {
    expect(scope.foo).toEqual('bar');
  });
});