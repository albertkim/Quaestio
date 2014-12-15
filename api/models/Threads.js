module.exports = {
    
    tableName: "threads",
    
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
        content: {
            type: "string"   
        },
        isDeleted: {
            type: "boolean"   
        },
        isAssignmentSpecific: {
            type: "boolean"
        }
    }
    
}