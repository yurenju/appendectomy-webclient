'use strict';

angular
  .module('appendectomyApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ng-bootstrap3-datepicker'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
