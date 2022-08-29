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

//encrypt password using bcrypt
UserSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }
    let salt=await bcrypt.genSalt(10);
    this.password = bcrypt.hashSync(this.password, salt);
    
});

//Match user password to hash password
UserSchema.methods.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
};

module.exports=mongoose.model('User',UserSchema);




