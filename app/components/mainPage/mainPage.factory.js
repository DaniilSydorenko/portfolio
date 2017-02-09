(function () {
    'use strict';

    app.factory('dataAppFactory', ['$resource', function($resource) {
        return $resource('storage/app.json', {}, {});
    }]);

    //app.factory('dataAppFactory', ['$http', function ($http) {
    //    var url = "storage/app.json";
    //
    //    return {
    //        getData: function () {
    //            return $http.get(url);
    //        }
    //    }
    //}]);

})();