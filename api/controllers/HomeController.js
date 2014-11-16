module.exports = {

	get: function(req, res){
		console.log(Schools.getAllSchools());
		return res.send("Sup y'all");
	}

}