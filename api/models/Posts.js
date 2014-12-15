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
            type: "string",
            required: true
        },
        isDeleted: {
            type: "boolean"   
        },
        chats: {
            collection: "chats",
            via: "postId"
        }
	},

	getPostsByThreadId: function(threadId, callback){
        Posts.find({where: {threadId: threadId}}).exec(function(error, threads){
            if(error) {
                callback(error, null);   
            } else {
                callback(null, threads);
            }
        });   
    }

}