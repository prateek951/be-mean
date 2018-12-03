app.service("mobileService",function($http,$q){
    this.object = {
        getMobileJson:function(){
                var defered = $q.defer();
            $http.get('server/mobile.json').success(function(data){
                defered.resolve(data);
            }).error(function(error){
                defered.reject(error);
            });  
            return defered.promise;
        },getMenuJson:function(){
            var defered = $q.defer();
            $http.get('server/mainMenu.json').success(function(data){
                defered.resolve(data);
            }).error(function(error){
                defered.reject(error);
            });
            return defered.promise;
        }
    }
});

app.service("menuService",function($http,$q){
    this.object = {
        getMenuJson:function(){
            var defered = $q.defer();
            $http.get('server/mainMenu.json').success(function(data){
                defered.resolve(data);
            }).error(function(error){
                defered.reject(error);
            });
            return defered.promise;
        }
    }
});

app.service("quickLinksService",function($http,$q){
    this.object = {
        getQuickLinksJson:function(){
            var defered = $q.defer();
            $http.get('server/quickLinks.json').success(function(data){
                defered.resolve(data);
            }).error(function(error){
                defered.reject(error);
            });
            return defered.promise;
        }
    }
});
