'use strict';

/* Controllers */

var appControllers = angular.module('appControllers', []);


appControllers.controller('UsersCtrl', ['$scope', 'User',
  function($scope, User) {
     $scope.users = User.query();
}]);


appControllers.controller('PostsCtrl', ['$scope', 'Post',
  function($scope, Post) {
     $scope.posts = Post.query();
}]);

