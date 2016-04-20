app.controller('MainController', function ($scope, $timeout, $q, $http, $rootScope) {
    $scope.message = "MAIN PAGE";
    $scope.data = "Some data";

    var defer = $q.defer();

    defer.promise
        .then(function (val) {
            $scope.message = val;
        });

    $timeout(function () {
        defer.resolve("Some new data");
    }, 3000);

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
});