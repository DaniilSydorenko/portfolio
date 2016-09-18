app.directive('projectDirective', function () {
    return {
        restrict: 'E',
        templateUrl: '/portfolio/app/shared/project/projectDatasideDirective.html',
        replace: true,
        link: function(element) {
            console.log(element);
        },
        scope : {
            projectDescription: '='
        }
    }
});
