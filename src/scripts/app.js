define([
    'angular',
    'controllers/coreController',
    'directives/wfDatePicker',
    'directives/wfDynamicField',
    'directives/wfDynamicForm',
    'services/getData',
    'services/getTemplate'
    ], function (angular, coreController, wfDatePicker, wfDynamicField, wfDynamicForm, getData, getTemplate) {
        'use strict';

        return angular.module('wfApp', [
            'wfApp.coreController',
            'wfApp.wfDatePicker',
            'wfApp.wfDynamicField',
            'wfApp.wfDynamicForm',
            'wfApp.getData',
            'wfApp.getTemplate'
        ]);
});