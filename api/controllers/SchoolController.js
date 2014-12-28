module.exports = {

	get: function(req, res) {

		Schools.getAllSchools(function(error, schools) {
			if(error) {
				console.log(error);
			} else {
				res.view("schools", {session: req.session, schools: schools});
			}
			
		});
	}

}