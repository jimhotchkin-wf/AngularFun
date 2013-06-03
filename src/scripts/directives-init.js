'use strict';

/* Directives */

define(
    [
        'angular',
        'directives/wfDatePicker',
        'directives/wfDynamicField',
        'directives/wfDynamicForm'
    ],
    function(
        angular,
        wfDatePicker,
        wfDynamicField,
        wfDynamicForm
    ) {

        var directives = angular.module('wf-directives', []);

        directives.directive('wfDatePicker', wfDatePicker);
        directives.directive('wfDynamicField', wfDynamicField);
        directives.directive('wfDynamicForm', wfDynamicForm);

        return directives;
    }
);
