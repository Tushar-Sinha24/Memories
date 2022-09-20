const mongoose=require('mongoose');

const PostSchema=new mongoose.Schema({
    title: String,

    message: String,

    tag:[ {
        type:Array,
    }],

    photo:{
        type:String,
        default:'no-photo.jpg',
        required: true 
    } ,

    likeCount:{
        type:Number,
        default : 0
    },

    createdAt : {
        type: Date,
        default : Date.now
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    }
});



module.exports=mongoose.model('Post',PostSchema);