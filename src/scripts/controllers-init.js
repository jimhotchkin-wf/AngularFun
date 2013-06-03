'use strict';

/* Controller Module Define */

define(
    [
        'angular',
        'controllers/dynaFormController',
        'controllers/mainController'
    ],
    function(
        angular,
        dynaFormController,
        mainController
    ) {
        var controllers = angular.module('wf-controllers', []);

        // Register the controllers with the wf-controllers module, so we don't have to pull them all in in app.js
        controllers.controller('dynaFormController', dynaFormController);
        controllers.controller('mainController', mainController);

        return controllers;
    }
);