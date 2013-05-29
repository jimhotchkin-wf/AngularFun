'use strict';

angular.module('app')
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'RequireJS',
            'Grunt',
            'Karma'
        ];
    }])
    .controller('DynaFormCtrl', [function () {
        //
}]);
