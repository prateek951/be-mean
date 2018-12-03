app.controller("mobileCtrl",function($scope,mobileService){
    var step = 3;
    $scope.increase = step;
    $scope.more = function(){
        $scope.increase += 3;
    }
   $scope.loadMobile = function () {
       var promise =mobileService.object.getMobileJson();
       console.dir(promise);
       function success(data){
           $scope.result = data;
       }
       function error(error){
           $scope.result= error;
       }
       promise.then(success, error);
   } 

    /*angular.forEach($scope.result, function (friend) {
        result.price = parseFloat(result.price);
    });*/
});

app.controller("menuCtrl",function($scope,menuService){
    $scope.loadMenu = function () {
        var promise =menuService.object.getMenuJson();
        console.dir(promise);
        function success(data){
            $scope.menus = data;
        }
        function error(error){
            $scope.menus= error;
        }
        promise.then(success, error);
    }
});

app.controller("quickLinksCtrl",function($scope,quickLinksService){
    $scope.loadQuickLinks = function () {
        var promise =quickLinksService.object.getQuickLinksJson();
        console.dir(promise);
        function success(data){
            $scope.quickLinks = data;
        }
        function error(error){
            $scope.quickLinks= error;
        }
        promise.then(success, error);
    }
});
