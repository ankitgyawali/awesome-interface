'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'app/partials/home.html', controller: 'homeCtrl'});
        $routeProvider.when('/about', {templateUrl: 'app/partials/about.html', controller: 'aboutController'});
        $routeProvider.when('/search', {templateUrl: 'app/partials/search.html', controller: 'searchController'});
        $routeProvider.when('/awesome/:list', {templateUrl: 'app/partials/awesome-list.html', controller: 'awesomeController'});
        $routeProvider.when('/awesome/:list/:sublist*', {templateUrl: 'app/partials/awesome-sublist.html', controller: 'awesomeChildController'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);



angular.module('myApp').factory('JSONService', ['$timeout', '$http',
    function($timeout, $http) {
        
        var rootJSON = {};
        
        return ({ 
            setJSON: setJSON,
            getJSON: getJSON,

        })

         function setJSON(value) {
            rootJSON = value;

        }
    
         function getJSON() {
            return mainJSON;

        }
 

    }
    ]);