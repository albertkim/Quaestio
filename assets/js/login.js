var app = angular.module("login", []);

app.controller("loginController", function($scope, $http, $location) {
    
    $scope.login = function() {
        var data = {
            email: $scope.email,
            password: $scope.password
        };
        $http.post("/login", data).success(function(response){
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