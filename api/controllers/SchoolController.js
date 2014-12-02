module.exports = {

	get: function(req, res){
		Schools.getAllSchools(function(error, schools){
			if(error){
				console.log(error);
			} else{
				console.log(schools);
				res.view("homepage", {schools: schools});
			}
			
		});
	}

}