module.exports = {
	
	get: function(req, res){
		var schoolName = req.param("school");
		console.log("School in url: " + schoolName);

		Departments.getDepartmentsBySchool(schoolName, function(error, departments){
			if(error){
				console.log(error);
			} else{
				res.view("departments", {schoolName: schoolName, departments: departments});
			}
			
		});
	},

	getCourse: function(req, res){
		var schoolName = req.param("school");
		var courseId = req.param("courseId");

		Courses.getCourseById(courseId, function(error, course){
			res.view("course", { schoolName: schoolName, course: course[0] });
		})
		
	},
    
    getThreadsByUnitId: function(req, res){
        var unitId = req.param("unitId");
        
        Units.getThreadsByUnitId(unitId, function(error, threads){
            if(error) {
                console.log(error);   
            } else {
                console.log(threads);
                return threads;
            }
        });
    },
    
    subscribeToThreads: function(req, res) {
        var unitId = req.param("unitId");
        Thread.subscribe(req.socket);
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