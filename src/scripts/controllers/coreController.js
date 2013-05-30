define(['angular'], function (angular) {
    return angular.module('wfApp.coreController', [])
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
    });