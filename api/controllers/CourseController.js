module.exports = {
	
	get: function(req, res){
		var schoolName = req.param("school");
		console.log("School in url: " + schoolName);

		Departments.getDepartmentsBySchool(schoolName, function(error, departments){
			if(error){
				console.log(error);
			} else{
				console.log("Departments: ");

				res.view("departments", {schoolName: schoolName, departments: departments});
			}
			
		});
	},

	getCourse: function(req, res){
		var schoolName = req.param("school");
		var courseId = req.param("courseId");
		res.view("course", { schoolName: schoolName });
	}
	
}