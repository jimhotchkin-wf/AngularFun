'use strict';

angular.module('app')
  .directive('wfDynamicField', ['$compile','getTemplate', function ($compile, getTemplate) {

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
    }]);
