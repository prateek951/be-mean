app.factory("regFactory", function ($http, $q) {
    var object = {
        registerUser: function (userObject) {
            var defer = $q.defer();
            $http.post('http://192.168.0.157:1234/register', userObject).then(function (data) {
                defer.resolve(data);
            }, function (error) {
                defer.reject(error);
            });
            return defer.promise;
        },
        checkEmail: function (emailObject) {
            var defer = $q.defer();
            $http.post('http://192.168.0.157:1234/check', emailObject).then(function (data) {
                defer.resolve(data);
            }, function (error) {
                defer.reject(error);
            });
            return defer.promise;
        },
        checkContact: function (contactObject) {
            var defer = $q.defer();
            $http.post('http://192.168.0.157:1234/check', contactObject).then(function (data) {
                defer.resolve(data);
            }, function (error) {
                defer.reject(error);
            });
            return defer.promise;
        }
    }
    return object;
});