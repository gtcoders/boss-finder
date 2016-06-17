'use strict';

angular.module('bossFinderApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        template: '<login></login>'
      })
      .state('logout', {
        url: '/logout?referrer',
        referrer: 'landing',
        template: '',
        controller: function($state, Auth) {
          Auth.logout();
          $state.go('landing');
        }
      })
      .state('signup', {
        url: '/signup',
        template: '<signup></signup>'
      })
      .state('settings', {
        url: '/settings',
        template: '<settings></settings>',
        authenticate: true
      });
  })
  .run(function($rootScope) {
    $rootScope.$on('$stateChangeStart', function(event, next, nextParams, current) {
      if(next.name === 'logout' && current && current.name && !current.authenticate) {
        next.referrer = current.name;
      }
    });
  });
