module.exports = {

	get: function(req, res) {
		res.view("register", {session: req.session});
	},
    
    register: function(req, res) {
        // verify inputs
        var email = req.param("email");
        var password = req.param("password");
        
        // create database entry
        Users.addUser(email, password, function(error, user){
            if(error) {
                console.log(error);
                res.send({error: "User already exists"});
            } else {
                res.status = 200;
                res.send();
            }
        });
    }

}