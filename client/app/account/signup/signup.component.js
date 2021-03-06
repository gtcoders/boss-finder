'use strict';

(function() {

  class SignupController {
    //start-non-standard
    user = {};
    errors = {};
    submitted = false;
    //end-non-standard

    constructor(Auth, $state) {
      this.Auth = Auth;
      this.$state = $state;
    }

    register(form) {
      this.submitted = true;

      if(form.$valid) {
        this.Auth.createUser({
          name: this.user.name,
          email: this.user.email,
          password: this.user.password
        })
          .then(() => {
            // Account created, redirect to profile
            this.$state.go('profile');
          })
          .catch(err => {
            err = err.data;
            this.errors = {};

            // Update validity of form fields that match the mongoose errors
            angular.forEach(err.errors, (error, field) => {
              form[field].$setValidity('mongoose', false);
              this.errors[field] = error.message;
            });
          });
      }
    }
  }

  angular.module('bossFinderApp')
    .component('signup', {
      templateUrl: 'app/account/signup/signup.html',
      controller: SignupController
    });

})();
