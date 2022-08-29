const mongoose=require('mongoose');
var bcrypt = require('bcryptjs');

const UserSchema=new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please add a name']
    },

    email: {
        type: String,
        required: [true, 'Please add a email'],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email']
    },
    
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: 6,
        select: false
    },

    resetPasswordToken: String,

    resetPasswordExpie: Date,

    createdAt: {
        type: Date,
        default: Date.now
    }
});


module.exports=mongoose.model('User',UserSchema);

//encrypt password using bcrypt
UserSchema.pre('save', function(next){
    if(!this.isModified('password')){
        next();
    }
    var salt= bcrypt.genSalt(10)
    this.password = bcrypt.hashSync(this.password, salt);
    console.log(this.password)
});


