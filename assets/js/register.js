var app = angular.module("register", []);

app.controller("registerController", function($scope, $http, $location) {
    
    $scope.register = function() {
        var data = {
            email: $scope.email,
            password: $scope.password
        };
        $http.post("/register", data).success(function(response){
            if(response.error) {
                console.log(response.error);
            } else {
                console.log("redirecting");
                window.location = "/schools"
            }
        }).error(function(error){
            console.log(error);
        });
    }
    
});