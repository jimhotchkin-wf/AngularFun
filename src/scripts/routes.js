define(['angular'], function (angular) {
    'use strict';
    var routes = angular.module('wf-routes', []);

    return routes.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'mainController'
            })
            .when('/dynaform', {
                templateUrl: 'views/dynaForm.html',
                controller: 'dynaFormController'
            })
            .otherwise({
                redirectTo: '/'
            });
        }]);
});