module.exports = {
    
    tableName: "units",
    
    autoPK: true,
    
    attributes: {
        courseId: {
            model: "courses",
            required: true
        },
        name: {
            type: "string"
        },
        isHidden: {
            type: "boolean"
        },
        threads: {
            collection: "threads",
            via: "unitId"
        }
    },

    getUnitsByCourseId: function(courseId, callback) {
        Units.find({where: {courseId: courseId}}).exec(function(error, units){
            if(error) {
                callback(error, null);
            } else {
                callback(null, units);
            }
        });
    }
    
}