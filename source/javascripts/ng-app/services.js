'use strict';

/* Services */

var appServices = angular.module('appServices', ['ngResource']);

appServices.factory('User', ['$resource',
  function($resource){
    return $resource("http://api.7-am.ru/v1/users", {}, {
      query: { method: "GET", isArray: true }
    });
  }]);

appServices.factory('Post', ['$resource',
  function($resource){
    return $resource("http://api.7-am.ru/v1/users/1/sites/1/posts", {}, {
      query: { method: "GET", isArray: true }
    });
  }]);

