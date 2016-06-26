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

        $scope.root = {}
        $http({
                        method: 'GET',
                        url: 'awesome.json',
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
        $scope.img = "img/iconset-addictive-flavour-set/png/screen_aqua_glossy.png";
        $scope.showTopToggle = false;
    }])
    .controller('awesomeChildController', ['$scope', function ($scope) {
        $scope.$parent.title = "Awesome Interface";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/screen_rulers_glossy.png";
        $scope.$parent.showTopToggle = true;
    }])
    .controller('awesomeController', ['$scope', function ($scope) {
        $scope.$parent.title = "Awesome Interface";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/screen_rulers_glossy.png";
        $scope.$parent.showTopToggle = true;
    }])
    .controller('MaverixCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Awesome Interface";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/screen_rulers_glossy.png";
        $scope.$parent.showTopToggle = true;
    }])
  
    .controller('FormsCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Forms";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/tablet.png";
        $scope.$parent.showTopToggle = false;

    }])
    .controller('homeCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Awesome Interface Home";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/screen_aqua_glossy.png";
        $scope.$parent.showTopToggle = true;

    }])
    .controller('MyCtrl2', ['$scope', function ($scope) {
        $scope.$parent.title = "Warnings";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/moleskine_black.png";
        $scope.$parent.showTopToggle = false;
    }]);
