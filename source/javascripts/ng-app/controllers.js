'use strict';

/* Controllers */

var appControllers = angular.module('appControllers', []);

appControllers.controller('ServicesCtrl', ['$scope', 'Tariff',
  function($scope, Tariff) {
     $scope.tariffs = Tariff.query();
}]);

