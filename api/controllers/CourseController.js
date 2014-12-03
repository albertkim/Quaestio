module.exports = {
	
	get: function(req, res){
		var schoolName = req.param("school");
		console.log("School in url: " + schoolName);

		Departments.getDepartmentsBySchool(schoolName, function(error, departments){
			if(error){
				console.log(error);
			} else{
				console.log("Departments: ");

				var departmentList = [];

				_.each(departments, function(value, key){
					var fullDepartment = {
						departmentId: key,
						courses: value
					};
					departmentList.push(fullDepartment);
					console.log(fullDepartment);
				});

				console.log(departmentList);

				res.view("departments", {schoolName: schoolName, departments: departmentList});
			}
			
		});
	}
	
}