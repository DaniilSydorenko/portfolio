app.directive('projectDirective', function () {

    return {
        restrict: 'E',
        templateUrl: function (elem, attr) {
            var baseUrl = '/portfolio/app/shared/project/';
            var templates = {
                data: 'projectDatasideDirective.html',
                bg: 'projectBgsideDirective.html'
            };

            //var template = '';
            //
            //switch(attr.side){
            //    case 'data':
            //        template = templates.data;
            //        console.log(attr.side);
            //        break;
            //    case 'bg':
            //        template = templates.bg;
            //        console.log(attr.side);
            //        break;
            //}

            if (attr.side === "data") {
                console.log(attr.side);
                //return '/portfolio/app/shared/project/projectDatasideDirective.html';
            } else if (attr.side === "bg") {
                console.log(attr.side);
                //return '/portfolio/app/shared/project/projectBgsideDirective.html';
            }

            //return baseUrl + template;
            return '/portfolio/app/shared/project/projectDatasideDirective.html';

        },
        replace: true,
        link: function(element) {
            //console.log(element);
        },
        scope : {
            projectDescription: '=',
            side: '@'
        }
    }
});
