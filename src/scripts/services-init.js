'use strict';

/* Services */

define(
    [
        'angular',
        'angular-resource',
        'services/getData',
        'services/getTemplate'
    ],
    function (
        angular,
        angularResource,
        getData,
        getTemplate
    ) {

        var services = angular.module('wf-services', ['ngResource']);

        services.factory('getData', getData);
        services.factory('getTemplate', getTemplate);

        return services;
    });
