'use strict';

/* App Module */


var studioApp = angular.module('studioApp', [
  'ngRoute',
  'appControllers',
  'appServices'
]);

studioApp.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});