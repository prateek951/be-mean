app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "views/page.html"
    }).when("/login", {
        templateUrl: "views/login.html",
    }).when("/register", {
        templateUrl: "views/register.html",
    }).when("/dashboard", {
        templateUrl: "views/dashboard.html"
    }).otherwise({
        template: "Error, No such page found",
        redirectTo: "/"
    });
});