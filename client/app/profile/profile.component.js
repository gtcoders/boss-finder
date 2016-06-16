'use strict';
(function() {

  class ProfileController {
    constructor() {
      this.message = 'Hello';
    }
  }

  angular.module('bossFinderApp')
    .component('profile', {
      templateUrl: 'app/profile/profile.html',
      controller: ProfileController
    });

})();
