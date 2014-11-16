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
		}
	},

	getAllSchools: function(){
		Schools.find({}).exec(function(error, schools){
			if(error){
				console.log("Schools could not be found");
				console.log(error);
			} else{
				console.log("All schools successfully found");
				console.log(schools);
			}
		});
	}

}