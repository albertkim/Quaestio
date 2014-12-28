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
        
        var bcrypt = require('bcrypt-nodejs');
        var hashedPassword = bcrypt.hashSync(password);
        
		var newUser = {
			email: email,
			password: hashedPassword
		};
		Users.create(newUser).exec(function(error, user) {
			if(error) {
				callback(error, null);
			} else {
				callback(null, user);
			}
		});
	},
    
    login: function(email, password, callback) {
        
        var bcrypt = require('bcrypt-nodejs');
        console.log("Logging in user: " + email);
           
        Users.find({where: {email: email}}).exec(function(error, user) {
            if(error || user[0] == undefined) {
                console.log("The user does not exist");
                callback("The user does not exist", null);
            } else {
                passwordCorrect = bcrypt.compareSync(password, user[0].password);
                if(passwordCorrect) {
                    console.log("Password is correct");
                    callback(null, user[0]);
                } else {
                    console.log("Password is incorrect");
                    callback("Password is incorrect", null);
                }
            }

        })
        
    }

}