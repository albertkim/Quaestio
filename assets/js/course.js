// This javascript file will handle all functionality on the course page
// Functionality:
    // real-time threads updating (resource: http://sailsjs.org/#/documentation/reference/websockets/sails.sockets)
    // real-time posts updating per thread
    // real-time users online updating

// Angular controllers will be defined here

var app = angular.module("course", []);

app.controller("courseController", function($scope, $http) {
    
    var init = function() {
        console.log("Initializing units");
        $http.get("/api/getUnitsByCourseId/" + course.id).success(function(response){
            console.log(response);
            $scope.units = response;
        });
    };
    
    $scope.subscribeToThreads = function(unitId) {
        console.log("Subscribing to threads in unit: " + unitId);
        io.socket.get("/api/subscribeToThreads/" + unitId, function(resData, jwres) {
            console.log(resData);
        });
    },
        
    $scope.getThreadsByUnitId = function(index) {
        var unit = $scope.units[index];
        $http.get("/api/getThreadsByUnitId/" + unit.id).success(function(response) {
            console.log(response);
            $scope.threads = response;
            // update the url
            
            // clear current posts
            $scope.posts = [];
        });
        // get resources for the clicked unit
        $scope.getResourcesByUnitId(index);
    },
        
    $scope.getResourcesByUnitId = function(index) {
        var unit = $scope.units[index];
        $http.get("/api/getResourcesByUnitId/" + unit.id).success(function(response) {
            console.log(response);
            $scope.resources = response;
        });
    },
        
    $scope.getPostsByThreadId = function(index) {
        var thread = $scope.threads[index];
        $http.get("/api/getPostsByThreadId/" + thread.id).success(function(response) {
            console.log(response);
            $scope.posts = response;
        });
    }
    
    init();
    
});