define(['angular'], function (angular) {
    'use strict';

    var getData = function ($http) {
            // Service logic
            // ...

            // Public API here
            return {
                entityJson: function (entity) {
                    var jsonUri, promise;
                    switch (entity) {
                    case 'userprofile':
                        jsonUri = '/scripts/data/profile.json';
                        break;
                    case 'accounts':
                        jsonUri = '/scripts/data/accounts.json';
                        break;
                    }
                    promise = $http.get(jsonUri).then(function (response) {
                        return response.data;
                    });
                    return promise;
                }
            };
    };

    getData.$inject = ['$http'];

    return getData;
});