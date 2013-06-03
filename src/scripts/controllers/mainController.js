define(['angular'], function (angular) {
    var MainCtrl = function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'RequireJS',
            'Grunt',
            'Karma'
        ];
    };

    MainCtrl.$inject = ['$scope'];

    return MainCtrl;

});