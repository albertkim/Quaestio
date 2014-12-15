module.exports = {

	tableName: "schools",

	attributes: {
		name: {
			type: "string",
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
			collection: "departments",
			via: "schoolName"
		}
	},

	getAllSchools: function(callback) {
		Schools.find().populate("departments").exec(function(error, schools) {
			if(error) {
				console.log("Schools could not be found");
				return callback(error, []);
			} else {
				return callback(null, schools);
			}
		});
	}

}