(function () {
    'use strict';

    app.factory('dataAppFactory', ['$http', function ($http) {
        var url = "storage/app.json";

        return {
            getData: function () {
                return $http.get(url);
            }
        }
    }]);

})();