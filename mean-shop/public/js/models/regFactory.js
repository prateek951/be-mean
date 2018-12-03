'use strict';

/**
 * @ngdoc type
 * @name  regFactory
 * @module register
 * @description RegisterFactory of the Shop Application
 *
 */


app.factory("regFactory", function ($http, $q) {
    var object = {
        registerUser: function (userObject) {
            var defer = $q.defer();
            $http.post('http://localhost:1234/register', userObject).then(function (data) {
                defer.resolve(data);
            }, function (error) {
                defer.reject(error);
            });
            return defer.promise;
        },
        checkEmail: function (emailObject) {
            var defer = $q.defer();
            $http.post('http://localhost:1234/check', emailObject).then(function (data) {
                defer.resolve(data);
            }, function (error) {
                defer.reject(error);
            });
            return defer.promise;
        },
        checkContact: function (contactObject) {
            var defer = $q.defer();
            $http.post('http://localhost:1234/check', contactObject).then(function (data) {
                defer.resolve(data);
            }, function (error) {
                defer.reject(error);
            });
            return defer.promise;
        }
    }
    return object;
});