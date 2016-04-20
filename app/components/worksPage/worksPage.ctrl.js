app.controller('WorksController', function ($scope, $routeParams) {
    $scope.message = "WORKS PAGE";
    $scope.workId = $routeParams.id;
});