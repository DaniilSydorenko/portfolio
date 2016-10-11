(function() {
    'use strict';

    app.controller('MainController', ['$scope', '$timeout', '$q', '$http', '$rootScope', 'dataAppFactory',
        function ($scope, $timeout, $q, $http, $rootScope, dataAppFactory) {

        dataAppFactory.getData()
            .then(function (response) {
                $scope.projects = response.data.projects;
                $scope.skills = response.data.skills;
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


        //@TODO norm validation
        $scope.submitForm = function (isValid) {
            if (isValid) {
                console.log('our form is amazing');
            }
        };

        // @TODO
        //var responseData;
        //$http.get('http://www.w3schools.com/angular/customers.php').then(function(response){
        //    responseData = response.data;
        //    console.log(responseData);
        //});
        //
        //
        //$rootScope.$on('$routeChangeStart', function (event, current, previous, rejection) {
        //    console.log("START");
        //});
    }]);
})();