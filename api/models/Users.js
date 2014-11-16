module.exports = {

	tableName: "users",

	attributes: {
		id: {
			type: "integer",
			primaryKey: true
		},
		email: {
			type: "string",
			required: true
		},
		name: {
			type: "string"
		},
		password: {
			type: "string",
			required: true
		},
		dateCreated: {
			type: "datetime"
		}
	},

	addUser: function(email, name, password, dateCreated){
		var newUser = {
			email: email,
			name: name,
			password: password,
			dateCreated: new Date()
		}
		Users.create(newUser).exec(function(error, user){
			if(error){
				console.log("User could not be created");
				console.log(error);
			} else{
				console.log("Created user " + user);
			}
		});
	}

}