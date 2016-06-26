'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

    .controller('AppCtrl', ['$scope', '$location', '$http','JSONService', function ($scope, $location,$http,JSONService) {

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.displayAwesome = function(idx){
            $scope.displayIndex = idx;
        }

        $scope.gotosubList = function(idx){
            $location.url("/awesome/" + $scope.root.headers[$scope.displayIndex].title + "/" +$scope.root.headers[$scope.displayIndex].titleDetails[idx].name);
            $scope.subdisplayIndex = idx;
        }

        $scope.isDesc = function(str){
            console.log(str);
            return true;
        }

        $scope.root = {}
        $http({
                        method: 'GET',
                        url: 'awesomewithdetails.json',
                         headers: {
                            'Content-Type': 'application/json'
                        }
                    }).success(function(data, status, headers, config) {
                        //$scope.setcars(data);
                        JSONService.setJSON(data);
                        $scope.root = data;
                        console.log($scope.root);

                    })
                    .error(function(data, status, headers, config) {

                    });

        $scope.title = "Awesome Interface";
        $scope.subNav1 = 0;
        $scope.$parent.img = "img/awesome.png";
        $scope.showTopToggle = false;
    }])
    .controller('awesomeChildController', ['$scope', function ($scope) {
        $scope.$parent.title = "Awesome Interface / Lists";
        
        $scope.$parent.showTopToggle = false;
    }])
    .controller('awesomeController', ['$scope', function ($scope) {
        $scope.$parent.title = "Awesome Interface / Lists";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('aboutController', ['$scope', function ($scope) {
        $scope.$parent.title = "Awesome Interface / About";
        $scope.$parent.showTopToggle = true;
    }])
  
    .controller('homeCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Awesome Interface Home";
        $scope.$parent.showTopToggle = true;

    }])
    .controller('searchController', ['$scope', function ($scope) {
        $scope.$parent.title = "Awesome Interface / Search";
        $scope.$parent.showTopToggle = false;
    }]);
