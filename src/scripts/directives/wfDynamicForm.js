define(
    [
    'angular',
    'services/getData'
    ],
    function (angular, getData) {
    'use strict';

    var wfDynamicForm = function (getData) {
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
    };

    wfDynamicForm.$inject = ['getData'];

    return wfDynamicForm;

});