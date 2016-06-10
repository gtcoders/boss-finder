'use strict';

(function() {

  class NavbarComponent {
    //start-non-standard
    menu = [{
      'title': 'Profile',
      'state': 'profile'
    }];

    isCollapsed = true;
    //end-non-standard

    constructor(Auth) {
      this.isLoggedIn = Auth.isLoggedIn;
      this.isAdmin = Auth.isAdmin;
      this.getCurrentUser = Auth.getCurrentUser;
    }
  }

  angular.module('bossFinderApp')
    .component('navbar', {
      templateUrl: 'components/navbar/navbar.html',
      controller: NavbarComponent
    });

})();
