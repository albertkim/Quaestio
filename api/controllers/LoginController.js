module.exports = {

	get: function(req, res) {
		res.view("login");
	},
    
    login: function(req, res) {
        // verify inputs
        var email = req.param("email");
        var password = req.param("password");
        
        // create database entry
        // note that the callback will only receive an error if any
        Users.login(email, password, function(error, user) {
            if(error) {
                console.log(error);
                res.send({error: error});
            } else {
                req.session.user = user;
                res.status = 200;
                res.send();
            }
        });
    },
    
    logout: function(req, res) {
        req.session.user = undefined;
        res.redirect("/");
    }

}