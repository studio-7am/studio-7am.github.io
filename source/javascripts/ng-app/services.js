'use strict';

/* Services */

var appServices = angular.module('appServices', ['ngResource']);


appServices.factory('Tariff', ['$resource',
  function($resource){
    return $resource("/tariffs.json", {}, {
      query: { method: "GET", isArray: true }
    });
  }]);

