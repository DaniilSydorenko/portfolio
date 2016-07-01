app.controller('MainController', function ($scope, $timeout, $q, $http, $rootScope) {
    $scope.message = "MAIN PAGE";
    $scope.data = "Some data";
    $scope.copyYear = new Date().getFullYear();

    var defer = $q.defer();

    defer.promise
        .then(function (val) {
            $scope.message = val;
        });

    $timeout(function () {
        defer.resolve("Some new data");
    }, 3000);

    /**
     * Projects
     */
    $scope.projects = {
        "wikendo": {
            "title": "Wikendo",
            "skrot": "wikendo",
            "url": "http://wikendo.pl/",
            "description": "Since the class name would have to be toggled via JavaScript and implementation would " +
            "differ based on the context of how you plan on using the hamburger, I’m going to leave the rest up to you."
        },
        "levelee": {
            "title": "Levelee",
            "skrot": "levelee",
            "url": "http://levelee.com/",
            "description": "Since the class name would have to be toggled via JavaScript and implementation would " +
            "differ based on the context of how you plan on using the hamburger, I’m going to leave the rest up to you."
        },
        "tapon_fb_app": {
            "title": "Tapon - Facebook Application",
            "skrot": "tapon_fb_app",
            "url": "http://tapon.pl/",
            "description": "Since the class name would have to be toggled via JavaScript and implementation would " +
            "differ based on the context of how you plan on using the hamburger, I’m going to leave the rest up to you."
        },
        "zszywka": {
            "title": "Zszywka",
            "skrot": "zszywka",
            "url": "http://zszywka.pl/",
            "description": "Since the class name would have to be toggled via JavaScript and implementation would " +
            "differ based on the context of how you plan on using the hamburger, I’m going to leave the rest up to you."
        },
        "i_sport": {
            "title": "I-sport",
            "skrot": "i_sport",
            "url": "https://i-sport.pl/",
            "description": "Since the class name would have to be toggled via JavaScript and implementation would " +
            "differ based on the context of how you plan on using the hamburger, I’m going to leave the rest up to you."
        },
        "folklor": {
            "title": "Zajazd Folklor",
            "skrot": "folklor",
            "url": "https://i-sport.pl/",
            "description": "Since the class name would have to be toggled via JavaScript and implementation would " +
            "differ based on the context of how you plan on using the hamburger, I’m going to leave the rest up to you."
        }
    };

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