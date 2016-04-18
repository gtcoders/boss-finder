'use strict';
(function() {

  class ProfileComponent {
    constructor() {
      this.message = 'Hello';
    }
  }

  angular.module('bossFinderApp')
    .component('profile', {
      templateUrl: 'app/profile/profile.html',
      controller: ProfileComponent
    });

})();
