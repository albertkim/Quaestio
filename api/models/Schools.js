module.exports = {

	tableName: "schools",

	attributes: {
		name: {
			type: "string",
			required: true,
			primaryKey: true
		},
		shortName: {
			type: "string"
		},
		city: {
			type: "string"
		},
		country: {
			type: "string"
		},
		website: {
			type: "string"
		},
		departments: {
			collection: "Departments",
			via: "schoolName"
		}
	},

	getAllSchools: function(callback){
		Schools.find({}).populate("departments").exec(function(error, schools){
			if(error){
				console.log("Schools could not be found");
				return callback(error, []);
			} else{
				console.log(schools.length + " schools found");
				return callback(null, schools);
			}
		});
	}

}