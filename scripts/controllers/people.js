// Generated by CoffeeScript 1.3.3
/*global define
*/

define(['controllers/controllers', 'services/people'], function(controllers) {
  'use strict';
  return controllers.controller('people', [
    '$scope', 'people', function($scope, service) {
      $scope.people = service.people;
      $scope.insertPerson = function() {
        return service.post();
      };
      return service.get();
    }
  ]);
});
