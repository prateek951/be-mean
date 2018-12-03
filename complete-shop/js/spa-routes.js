app.config(function($routeProvider){
    $routeProvider
        .when("/",{
        templateUrl:"page.html"
        }).when("/mobiles",{
            templateUrl:"electronics/mobiles.html"
        })
        .when("/tablets",{
            templateUrl:"electronics/tablets.html"
        })
        .when("/leds",{
            templateUrl:"electronics/led.html"
        })
        .when("/jeans",{
            templateUrl:"clothing/jeans.html"
        })
        .when("/formal shoes",{
            templateUrl:"footwear/formal shoes.html"
        })
        .when("/casual shoes",{
            templateUrl:"footwear/casual shoes.html"
        })
        .when("/shirts",{
            templateUrl:"clothing/shirts.html"
        })
        .when("/sports shoes",{
            templateUrl:"footwear/sports shoes.html"
        })
        .when("/t-shirts",{
            templateUrl:"clothing/t-shirts.html"
        })
        .when("/electronics",{
            templateUrl:"electronics.html"
        })
        .when("/clothing",{
            templateUrl:"clothing.html"
        })
        .when("/footwear",{
            templateUrl:"footwear.html"
        }).otherwise({template:"Error Page , No Match Found"
        ,redirectTo:"/"});
});