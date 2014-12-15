module.exports = {

	tableName: "courses",

	attributes: {
		id: {
			type: "integer",
			primaryKey: true,
            unique: true
		},
		name: {
			type: "string",
			required: true
		},
		shortName: {
			type: "string"
		},
		departmentId: {
			model: "departments"
		}
	},

	getCourseById: function(courseId, callback){
		Courses.find({where: {id: courseId}}).exec(function(error, course){
			if(error){
				console.log("Course with id " + courseId + " could not be found.");
				return callback(error, null);
			} else{
				return callback(null, course);
			}
		});
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