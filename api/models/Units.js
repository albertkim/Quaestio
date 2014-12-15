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
    
    
    
}