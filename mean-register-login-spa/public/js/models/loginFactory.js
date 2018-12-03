app.factory("loginFactory", function ($http, $q) {
    var object = {
        loginUser: function (loginObject) {
            var defer = $q.defer();
            $http.post('http://192.168.0.157:1234/login', loginObject).then(function (data) {
                defer.resolve(data);
            }, function (error) {
                defer.reject(error);
            })
            return defer.promise;
        }
    }
    return object;
});