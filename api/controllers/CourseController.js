module.exports = {
	
    // view methods
    
	get: function(req, res){
		var schoolName = req.param("school");
		console.log("School in url: " + schoolName);

		Departments.getDepartmentsBySchool(schoolName, function(error, departments){
			if(error){
				console.log(error);
			} else{
				res.view("departments", {session: req.session, schoolName: schoolName, departments: departments});
			}
			
		});
	},
    
	getCourse: function(req, res){
		var schoolName = req.param("school");
		var courseId = req.param("courseId");

		Courses.getCourseById(courseId, function(error, course){
			res.view("course", {session: req.session, schoolName: schoolName, course: course[0] });
		})
		
	},
    
    // JSON API methods
    
    getUnitsByCourseId: function(req, res) {
        var courseId = req.param("courseId");
        console.log("getUnitsByCourseId courseId: " + courseId);
        
        Units.getUnitsByCourseId(courseId, function(error, units){
            if(error) {
                console.log(error);   
            } else {;
                res.send(units);
            }
        });
    },
    
    getThreadsByUnitId: function(req, res) {
        var unitId = req.param("unitId");
        console.log("getThreadsByUnitId unitId: " + unitId);
        
        Threads.getThreadsByUnitId(unitId, function(error, threads){
            if(error) {
                console.log(error);
                res.send({error: "Could not retrieve threads for unit with id: " + unitId});
            } else {
                res.send(threads);
            }
        });
    },
    
    getPostsByThreadId: function(req, res) {
        var threadId = req.param("threadId");
        console.log("getPostsByThreadId threadId: " + threadId);
        
        Posts.getPostsByThreadId(threadId, function(error, posts){
            if(error){
                console.log(error);
                res.send({error: "Could not retrieve posts for thread with id: " + threadId});
            } else {
                res.send(posts);
            }
        });
    },
    
    // Resource to understand websocket integration: https://www.youtube.com/watch?v=enyZYgjXRqQ
    // NOTE: May be outdated, since it uses Sails v.0.9
    
    subscribeToThreads: function(req, res) {
        var unitId = req.param("unitId");
        
    },
    
    subscribeToPosts: function(req, res){
        var threadId = req.param("threadId");
        Post.find({where: {"threadId": threadId}}).exec(function(error, post) {
            if(error) {
                console.log(error);
            } else {
                Post.subscribe(req.socket, post);
            }
        });
    }
	
}