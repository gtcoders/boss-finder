'use strict';

angular.module('bossFinderApp.auth', [
    'bossFinderApp.constants',
    'bossFinderApp.util',
    'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
