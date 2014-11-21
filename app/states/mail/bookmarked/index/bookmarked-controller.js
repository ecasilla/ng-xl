'use strict';

angular.module('bms')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('mail.bookmarked', stateFactory('Bookmarked', {
      url: '/bookmarked',
      templateUrl: 'states/mail/bookmarked/index/main-view.html'
    }));
  })
  .controller('BookmarkedCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
