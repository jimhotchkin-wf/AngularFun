// angular.module('app', ['ngResource']);

'use strict';

angular.module('app', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/dynaform', {
                templateUrl: 'views/dynaForm.html',
                controller: 'DynaFormCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
