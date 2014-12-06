module.exports = {

	tableName: "departments",

	attributes: {
		id: {
			type: 'integer',
			primaryKey: true
		},
		name: {
			type: "string",
			required: true
		},
		shortName: {
			type: "string"
		},
		schoolName: {
			model: 'Schools'
		},
		courses: {
			collection: 'Courses',
			via: "departmentId"
		}
	},

	/*
	getDepartmentsBySchool: function(schoolName, callback){
		Departments.find({schoolName: schoolName}).populate("courses").exec(function(error, departments){
			if(error){
				console.log("Departments could not be found");
				return callback(error, []);
			} else{
				console.log(departments.length + " departments found");
				return callback(null, departments);
			}
		});
	}
	*/

	getDepartmentsBySchool: function(schoolName, callback){
		Departments.query("SELECT "
			+ "D.NAME AS departmentName, "
			+ "D.SHORTNAME AS departmentShortName, "
			+ "SCHOOLNAME AS schoolName, "
			+ "C.NAME AS courseName, "
			+ "C.SHORTNAME AS courseShortName, "
			+ "DEPARTMENTID AS departmentId, "
			+ "C.ID AS courseId "
			+ "FROM DEPARTMENTS D, COURSES C WHERE D.SCHOOLNAME = '" 
			+ schoolName 
			+ "' AND D.ID = C.DEPARTMENTID", function(error, courses){
			if(error){
				console.log("Departments could not be found");
				return callback(error, []);
			} else{
				console.log(courses);

				// organize courses into objects grouped by departments
				var coursesSortedByDepartment = _.groupBy(courses, 'departmentName');

				// modify the structure of the courses returned to be an array organized by their departments
				var departmentList = [];
				_.each(coursesSortedByDepartment, function(value, key){
					var fullDepartment = {
						departmentName: key,
						courses: value
					};
					departmentList.push(fullDepartment);
				});

				return callback(null, departmentList);
			}
		});
	}

}