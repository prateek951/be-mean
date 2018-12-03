app.controller("loginCtrl", function ($scope, $location, loginFactory) {
    $scope.doLogin = function () {
        if (($scope.email !== "") && ($scope.pwd !== "")) {
            var loginObject = {
                "email": $scope.email,
                "password": $scope.pwd
            }
            var promise = loginFactory.loginUser(loginObject);
            promise.then(function (data) {
                var login = data.data.details;
                if (login.length > 0) {
                    $location.path('/dashboard');
                } else {
                    $scope.email = "";
                    $scope.pwd = "";
                    $scope.logs = "invalid email or password"
                }
            }, function (error) {
                alert(error);
            });
        } else {
            $scope.msg = "enter your email id or password";
        }
    }
});


/*$location.path('/dashboard')*/