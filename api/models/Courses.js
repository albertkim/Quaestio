module.exports = {

	tableName: "courses",

	attributes: {
		id: {
			type: "int",
			primaryKey: true
		},
		name: {
			type: "string",
			required: true
		},
		shortName: {
			type: "string"
		},
		departmentId: {
			model: "Departments"
		}
	},

	getCoursesBySchool: function(schoolName, callback){
		Courses.find({where: {schoolName: schoolName}}).exec(function(error, courses){
			if(error){
				console.log("Courses could not be found");
				return callback(error, []);
			} else{
				console.log(courses.length + " courses found");
				return callback(null, courses);
			}
		});
	},

	getCoursesByDepartment: function(departmentId, callback){
		Courses.find({where: {departmentId: departmentId}}).exec(function(error, courses){
			if(error){
				console.log("Courses could not be found");
				return callback(error, []);
			} else{
				console.log(courses.length + " courses found");
				return callback(null, courses);
			}
		});
	}

}