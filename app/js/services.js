'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var myModule = angular.module('myApp.services', []).
    value('version', '0.1');

    angular.module('smApp').factory('JSONService', [
function() {

var root = {};

function getJSON() {
            return root;
}

function setJSON(obj) {
            root = obj;
}

  return ({

getJSON: getJSON,
setJSON: setJSON

});


	   }
]);