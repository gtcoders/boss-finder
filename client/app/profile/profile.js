'use strict';

angular.module('bossFinderApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        template: '<profile></profile>',
        authenticate: true
      });
  });
