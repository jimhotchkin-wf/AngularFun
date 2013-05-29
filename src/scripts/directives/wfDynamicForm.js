'use strict';

angular.module('app')
    .directive('wfDynamicForm', ['getData', function (getData) {
        return {
            restrict: 'A',
            scope: {},
            controller: ['$scope','$element', function ($scope, $element) {
                var formData = getData.entityJson($element.attr('entity')).then(function (response) {
                    $scope.formDefinitionObject = response;
                });
                return formData;
            }]
        };
    }]);
