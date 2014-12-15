module.exports = {

	tableName: "posts",
    
    autoPK: true,
    autoCreatedAt: true,

	attributes: {
        userId: {
            model: "users",
            required: true
        },
        threadId: {
            model: "threads",
            required: true
        },
        content: {
            type: "string"
        },
        isDeleted: {
            type: "boolean"   
        }
	},

	

}