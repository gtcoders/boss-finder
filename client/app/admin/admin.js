'use strict';

angular.module('bossFinderApp.admin')
  .config(function($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        template: '<admin></admin>'
      });
  });
