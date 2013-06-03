define(
    [
    'angular',
    'services/getTemplate'
    ],
    function (angular, getTemplate) {
    'use strict';

    var wfDynamicField = function ($compile, getTemplate) {

        return {
            restrict: 'A',
            replace: true,
            link: function (scope, element) {
                var fieldTemplate = getTemplate(scope.field.type);
                element.html(fieldTemplate);
                $compile(element.contents())(scope);
            },
            scope: {
                field: '=content'
            }
        };
    };

    wfDynamicField.$inject = ['$compile', 'getTemplate'];

    return wfDynamicField;

});