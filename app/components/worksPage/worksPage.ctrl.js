(function() {
    'use strict';

    angular.module('portfolioApp').controller('WorksController', function ($scope, $routeParams) {
        $scope.message = "WORKS PAGE";
        $scope.workId = $routeParams.id;
    });
})();