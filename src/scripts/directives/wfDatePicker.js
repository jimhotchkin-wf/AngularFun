'use strict';

angular.module('app')
.directive('wfDatePicker', [function () {
    return {
        restrict: 'A',
        link: ['scope', function (scope) {
            scope.additionalEvent = function () {
                // alert('todo: attach additional behaviour');
            };
        }],
        template: '<div class="controls"><input name="{{field.entity}}" id="id_{{field.entity}}" type="date" ng-required="field.required" ng-model="field.value" step maxlength="{{field.maxlength}}" ng-readonly="field.readonly" ng-click="additionalEvent()" /></div>',
        replace: true
    };
}]);
