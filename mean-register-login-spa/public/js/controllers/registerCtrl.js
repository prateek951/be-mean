app.controller("registerCtrl", function ($scope, regFactory) {
    $scope.register = function () {
        if (($scope.pwd !== "") && ($scope.cpwd !== "") && ($scope.userName !== "") && ($scope.contact !== "") && ($scope.eMail !== "")) {
            if ($scope.pwd === $scope.cpwd) {
                var password = $scope.pwd;
            }
            var userObject = {
                "userName": $scope.userName,
                "Contact": $scope.contact,
                "email": $scope.eMail,
                "password": password
            }
            var promise = regFactory.registerUser(userObject);
            promise.then(function (data) {
                alert(data.data.msg);
                $scope.userName = "";
                $scope.contact = "";
                $scope.eMail = "";
                $scope.pwd = "";
                $scope.cpwd = "";
            }, function (error) {
                alert(error);
            });
        } else {
            $scope.main = " All fields mentioned below are mandatory";
        }
    }

    $scope.doEmailCheck = function () {
        if ($scope.eMail !== "") {
            var emailObject = {
                "email": $scope.eMail
            }
            var promise = regFactory.checkEmail(emailObject);
            promise.then(function (data) {
                var contacts = data.data.details;
                console.log(contacts);
                if (contacts.length > 0) {
                    $scope.mail = "email id already in use...";
                } else {
                    $scope.numailmber = "";
                }
            }, function (error) {
                alert(error);
            });
        } else {
            $scope.mail = "please enter your email id";
        }
    }
    $scope.doContactCheck = function () {
        if ($scope.contact !== "") {
            var contactObject = {
                "Contact": $scope.contact
            }
            var promise = regFactory.checkContact(contactObject);
            promise.then(function (data) {
                var contacts = data.data.details;
                console.log(contacts);
                if (contacts.length > 0) {
                    $scope.number = "contact no already in use...";
                } else {
                    $scope.number = "";
                }
            }, function (error) {
                alert(error);
            });
        } else {
            $scope.number = "please enter your contact number";
        }
    }
});