'use strict';

angular.module('bossFinderApp', [
    'bossFinderApp.auth',
    'bossFinderApp.admin',
    'bossFinderApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.router',
    'ui.bootstrap',
    'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
