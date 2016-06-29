'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

.controller('AppCtrl', ['$scope', '$location', '$http', function($scope, $location, $http) {



        // Helper Functions 
        //Check if menu should be active class
        $scope.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };

        //For routing purpose
        $scope.displayAwesome = function(idx) {
            $scope.displayIndex = idx;
        }

        //For routing purpose
        $scope.gotosubList = function(idx) {
            $location.url("/awesome/" + $scope.root.headers[$scope.displayIndex].title + "/" + $scope.root.headers[$scope.displayIndex].titleDetails[idx].name);
            $scope.subdisplayIndex = idx;
        }

        //For routing purpose when searching item
        $scope.gotosubListS = function(pidx, idx) {
            idx = $scope.root.headers[pidx].titleDetails.indexOf(idx);
            $location.url("/awesome/" + $scope.root.headers[pidx].title + "/" + $scope.root.headers[pidx].titleDetails[idx].name);
            $scope.displayIndex = pidx;
            $scope.subdisplayIndex = idx;
        }



        $scope.root = {}
        // $.getJSON("https://raw.githubusercontent.com/ankitgyawali/awesome-interface/master/awesomewithdetails.json", function(data){
        // $scope.root = data;
        // });    
        
        //Instantiate Root data
        $http({
                method: 'GET',
                url: 'https://raw.githubusercontent.com/ankitgyawali/awesome-interface/master/awesomewithdetails.json',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).success(function(data, status, headers, config) {
                //$scope.setcars(data);
                ;
                $scope.root = data;

            })
            .error(function(data, status, headers, config) {
            console.log("Something went wrong: " + headers);
            });

        // Initialize some content
        $scope.title = "Awesome Interface";
        $scope.subNav1 = 0;
        $scope.$parent.img = "img/awesome.png";
        $scope.showTopToggle = false;
    }])
    .controller('awesomeChildController', ['$scope', function($scope) {
        $scope.$parent.title = "Awesome Interface / Lists";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('awesomeController', ['$scope', function($scope) {
        $scope.$parent.title = "Awesome Interface / Lists";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('aboutController', ['$scope', function($scope) {
        $scope.$parent.title = "Awesome Interface / About";
        $scope.$parent.showTopToggle = true;
    }])

.controller('homeCtrl', ['$scope', function($scope) {
        $scope.$parent.title = "Awesome Interface Home";
        $scope.$parent.showTopToggle = true;

    }])
    .controller('searchController', ['$scope', function($scope) {
        $scope.$parent.title = "Awesome Interface / Search";
        $scope.$parent.showTopToggle = false;
    }]);