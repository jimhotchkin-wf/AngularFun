define(['angular', 'services/getData'], function (angular, getData) {
    'use strict';

    angular.module('wfApp.wfDynamicForm', ['wfApp.getData'])
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
});