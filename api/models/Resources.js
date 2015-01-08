module.exports = {
 
    tableName: "resources",
    
    autoPK: true,
    autoCreatedAt: true,

	attributes: {
        userId: {
            model: "users",
            required: true
        },
        unitId: {
            model: "units",
            required: true
        },
        url: {
            type: "string"
        },
        description: {
            type: "string"   
        }
	},
    
    getResourceByUnitId: function(unitId, callback) {
        Resources.find({where: {unitId: unitId}}).exec(function(error, resources) {
            if(error) {
                callback(error, null);
            } else {
                callback(null, resources);
            }
        });
    }
    
}