'use strict';

angular.module('bossFinderApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('landing', {
        url: '/',
        template: '<landing></landing>'
      });
  });
