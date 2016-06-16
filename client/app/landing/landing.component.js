'use strict';

(function() {

  class LandingController {

    constructor() {
      this.features = [
        'Find your friends or colleagues',
        'Find a job near job'
      ];
    }
  }

  angular.module('bossFinderApp')
    .component('landing', {
      templateUrl: 'app/landing/landing.html',
      controller: LandingController
    });

})();
