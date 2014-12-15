module.exports = {
 
    tableName: "chats",
    
    autoPK: true,
    autoCreatedAt: true,

	attributes: {
        userId: {
            model: "users",
            required: true
        },
        postId: {
            model: "posts",
            required: true
        },
        content: {
            type: "string"
        }
	}
    
}