(function () {
    'use strict';

    app.directive('fieldWrapper', function () {

        return {
            restrict: 'E',
            templateUrl: './app/shared/fieldWrapper/fieldWrapper.html',
            replace: true,
            transclude: true
        };

    });

})();