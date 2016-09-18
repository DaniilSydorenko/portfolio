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
        "zszywka": {
            "path": "zszywka",
            "url": "http://zszywka.pl/",
            "data": {
                "title": "Zszywka",
                "role": "Frontend Developer",
                description: "Zszywka is a graphic social network. Here you can find an inspiring image on any topic," +
                " meet new people, to promote and advertise their own products." +
                "Zszywka allows you to store all images one place, create shared publics and share an inspiration with other users.",
                "responsibilities": "Since the class name would have to be toggled via JavaScript and implementation",
                "techs": "PHP5, MySQL, Smarty, HTML5, CSS3, JavaScript, jQuery",
                "conclusion": "I have to be toggled via JavaScript and implementation would"
            }
        },
        "levelee": {
            "skrot": "levelee",
            "url": "http://levelee.com/",
            "data": {
                "title": "Levelee",
                "role": "Frontend Developer",
                description: "Zszywka is a graphic social network. Here you can find an inspiring image on any topic," +
                " meet new people, to promote and advertise their own products." +
                "Zszywka allows you to store all images one place, create shared publics and share an inspiration with other users.",
                "responsibilities": "Since the class name would have to be toggled via JavaScript and implementation",
                "techs": "PHP5, MySQL, Smarty, HTML5, CSS3, JavaScript, jQuery",
                "conclusion": "I have to be toggled via JavaScript and implementation would"
            }
        },
        "tapon_fb_app": {
            "skrot": "tapon_fb_app",
            "url": "https://www.facebook.com/TapMoreGetMore/app/371913996253131/",
            "data": {
                "title": "Tapon - Facebook Application",
                "role": "Frontend Developer",
                description: "Zszywka is a graphic social network. Here you can find an inspiring image on any topic," +
                " meet new people, to promote and advertise their own products." +
                "Zszywka allows you to store all images one place, create shared publics and share an inspiration with other users.",
                "responsibilities": "Since the class name would have to be toggled via JavaScript and implementation",
                "techs": "PHP5, MySQL, Smarty, HTML5, CSS3, JavaScript, jQuery",
                "conclusion": "I have to be toggled via JavaScript and implementation would"
            }
        },
        "wikendo": {
            "skrot": "wikendo",
            "url": "http://wikendo.pl/",
            "data": {
                "title": "Wikendo",
                "role": "Frontend Developer",
                description: "Zszywka is a graphic social network. Here you can find an inspiring image on any topic," +
                " meet new people, to promote and advertise their own products." +
                "Zszywka allows you to store all images one place, create shared publics and share an inspiration with other users.",
                "responsibilities": "Since the class name would have to be toggled via JavaScript and implementation",
                "techs": "PHP5, MySQL, Smarty, HTML5, CSS3, JavaScript, jQuery",
                "conclusion": "I have to be toggled via JavaScript and implementation would"
            }
        },
        "i_sport": {
            "skrot": "i_sport",
            "url": "https://i-sport.pl/",
            "data": {
                "title": "I-sport",
                "role": "Frontend Developer",
                description: "Zszywka is a graphic social network. Here you can find an inspiring image on any topic," +
                " meet new people, to promote and advertise their own products." +
                "Zszywka allows you to store all images one place, create shared publics and share an inspiration with other users.",
                "responsibilities": "Since the class name would have to be toggled via JavaScript and implementation",
                "techs": "PHP5, MySQL, Smarty, HTML5, CSS3, JavaScript, jQuery",
                "conclusion": "I have to be toggled via JavaScript and implementation would"
            }
        },
        "folklor": {
            "path": "folklor",
            "url": "https://i-sport.pl/",
            "data": {
                "title": "Zajazd Folklor",
                "role": "Frontend Developer",
                description: "Zszywka is a graphic social network. Here you can find an inspiring image on any topic," +
                " meet new people, to promote and advertise their own products." +
                "Zszywka allows you to store all images one place, create shared publics and share an inspiration with other users.",
                "responsibilities": "Since the class name would have to be toggled via JavaScript and implementation",
                "techs": "PHP5, MySQL, Smarty, HTML5, CSS3, JavaScript, jQuery",
                "conclusion": "I have to be toggled via JavaScript and implementation would"
            }
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

    $scope.submitForm = function(isValid) {
        if (isValid) {
            console.log('our form is amazing');
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