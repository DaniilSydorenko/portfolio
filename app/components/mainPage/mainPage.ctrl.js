(function () {
    'use strict';

    app.controller('MainController', ['$scope', '$timeout', '$q', '$http', '$rootScope', 'dataAppFactory',
        function ($scope, $timeout, $q, $http, $rootScope, dataAppFactory) {
            var vm = this;

            vm.contactForm = {};

            dataAppFactory.get({}, function (response) {
                $scope.projects = response.projects;
                $scope.skills = response.skills;
                $scope.timeline = response.timeline;
            }, function (error) {
                console.log("Error: " + error.message);
            });

            // Year in the copyright
            $scope.copyYear = new Date().getFullYear();

            // @TODO
            var defer = $q.defer();

            defer.promise
                .then(function (val) {
                    $scope.message = val;
                });

            $timeout(function () {
                defer.resolve("new records");
            }, 3000);

            $scope.submitForm = function (form) {
                if (form.$invalid) {
                    $scope.formInvalid = true;
                }
            };

        }]);
})();