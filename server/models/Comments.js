const mongoose=require('mongoose');

const CommentSchema=new mongoose.Schema({
    comment:{
        type:String,
        required:[true,'Please add some text']
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
    post:{
        type:mongoose.Schema.ObjectId,
        ref:'Post',
        required:true
    }
});


module.exports=mongoose.model('Comment',CommentSchema);