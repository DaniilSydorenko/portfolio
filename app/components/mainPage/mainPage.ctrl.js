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

    /**
     * Skills
     */
    $scope.skills = {
        "backend": {
            "skillHeader": 'Backend',
            "skillIcon": 'icon icon-tools-2',
            "skillSubHeader": 'PHP7, MySQL, Node.js',
            "skillText": 'OOP, ORM, Laravel, Symfony, Composer'
        },
        "frontend": {
            "skillHeader": 'Frontend',
            "skillIcon": 'icon icon-mobile',
            "skillSubHeader": 'ES6, HTML5, CSS3',
            "skillText": 'Javascript, JQuery, Angular, Bootstrap, Flex-box, Media Queries, SASS, LESS'
        },
        "aut_tools": {
            "skillHeader": 'Automation tools',
            "skillIcon": 'icon icon-gears',
            "skillSubHeader": 'GULP, Bower, NPM',
            "skillText": 'Automation tasks, CSS Preprocessors, Files minification, BrowserSync'
        },
        "usability": {
            "skillHeader": 'Usability',
            "skillIcon": 'icon icon-tools',
            "skillSubHeader": 'Cross-Browser, Mobile',
            "skillText": 'Responsive Web Design, User Experience, Mobile first approach'
        },
        "browser_tools": {
            "skillHeader": 'Browser tools',
            "skillIcon": 'icon icon-browser',
            "skillSubHeader": 'Firefox, Chrome, Safari',
            "skillText": 'Element inspecting, Network, Resources'
        },
        "version_control": {
            "skillHeader": 'Version  Control',
            "skillIcon": 'icon icon-linegraph',
            "skillSubHeader": 'GIT, SVN',
            "skillText": 'GitHub, features and branches, Tortoise SVN, Gerrit'
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