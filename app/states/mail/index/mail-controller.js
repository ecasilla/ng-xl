'use strict';

angular.module('bms')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('mail', stateFactory('Mail', {
      url: '/mail',
      views: {
        '': {
          templateUrl: 'views/layout.html'
        },
        'aside': {
          templateUrl: 'views/partials/aside.nav.mail.html'
        }
      }
    }));
  })
  .controller('MailCtrl', function ($scope) {
     $scopt.mail = 'hello';
  });
