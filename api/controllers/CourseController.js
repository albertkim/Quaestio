module.exports = {
	
	get: function(req, res){
		var schoolName = req.param("school");
		console.log("School in url: " + schoolName);

		Departments.getDepartmentsBySchool(schoolName, function(error, departments){
			if(error){
				console.log(error);
			} else{
				console.log("Departments: ");
				console.log(departments);
				res.view("departments", {schoolName: schoolName, departments: departments});
			}
			
		});
	}
	
}