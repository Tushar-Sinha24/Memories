const mongoose=require('mongoose');

const PostSchema=new mongoose.Schema({
    title: String,

    message: String,

    creator: String,

    tags:[ {
        type:Array,
    }],

    selectedFile: String,

    likeCount:{
        type:Number,
        default : 0
    },

    createdAt : {
        type: Date,
        default : Date.now
    }
});


module.exports=mongoose.model('Post',PostSchema);