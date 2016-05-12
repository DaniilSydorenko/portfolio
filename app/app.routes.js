app.config(function ($routeProvider) {

    var templateUrl = 'app/components';

    $routeProvider
        .when('/', {
            templateUrl: templateUrl + '/mainPage/mainPage.html',
            //resolve: {
            //    data1: function ($q, $timeout) {
            //        var defer = $q.defer();
            //        $timeout(function () {
            //            defer.resolve();
            //            console.log('finished');
            //        }, 2000);
            //        return defer.promise;
            //    }
            //},
            controller: 'MainController'
        })

        .when('/works/:id', {
            templateUrl: templateUrl + '/worksPage/worksPage.html',
            controller: 'WorksController'
        })
        .when('/about', {
            templateUrl: templateUrl + '/aboutPage/aboutPage.html',
            controller: 'AboutController'
        })
        .when('/about/:param', {
            redirectTo: '/'
        })
        .otherwise({
            templateUrl: templateUrl + '/mainPage/mainPage.html',
            controller: 'MainController'
        });
});