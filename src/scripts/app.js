define([
    'angular',
    'routes',
    'controllers-init',
    'directives-init',
    'services-init'
    ], function (angular, routes, controllers, directives, services) {
        'use strict';
        // Declare app level module which depends on controllers, filters, and services
        return angular.module('wfApp', [
            'wf-routes',
            'wf-controllers',
            'wf-directives',
            'wf-services'
        ]);
});