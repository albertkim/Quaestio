module.exports = {

	tableName: "users",
    
    autoPK: true,
    autoCreatedAt: true,

	attributes: {
		email: {
			type: "string",
			required: true,
            unique: true
		},
		name: {
			type: "string"
		},
		password: {
			type: "string",
			required: true
		}
	},

	addUser: function(email, password, callback) {
		var newUser = {
			email: email,
			password: password
		};
		Users.create(newUser).exec(function(error, user) {
			if(error) {
				callback(error, null);
			} else {
				callback(null, user);
			}
		});
	}

}