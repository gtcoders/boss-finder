'use strict';

(function() {

  class MainController {

    constructor() {
      this.features = [
        'Find your friends or colleagues',
        'Find a job near job'
      ];
    }
  }

  angular.module('bossFinderApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });

})();
