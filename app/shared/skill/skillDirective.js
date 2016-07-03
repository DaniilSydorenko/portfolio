app.directive('skillDirective', function () {
    return {
        restrict: 'E',
        templateUrl: '/portfolio/app/shared/skill/skillDirective.html',
        replace: true,
        scope : {
            inputLabel : '@',
            rwdClass : '@',
            inputClass: '@',
            skillHeader: '@',
            skillIcon: '@',
            skillSubHeader: '@',
            skillText: '@'
        }
    }
});
