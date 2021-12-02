import mongoose from 'mongoose';

const userSchema = mongoose.Schema({

    firstName : { type:String, required:true },
    lastName : { type:String, required:true },
    email : {type: String, required: true, unique: true},
    password: {type: String, required: true},
    id : {type: String},
    profilePicture : {type:String,default:''},
    about:{type:String,default:''}
})



export default mongoose.model('User',userSchema);