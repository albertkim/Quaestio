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
    
    getThreadsByUnitId: function(unitId, callback){
        Threads.find({where: {unitId: unitId}}).populate("chats").exec(function(error, threads){
            if(error) {
                console.log(error);
            } else {
                return threads;   
            }
        });
    }
    
}