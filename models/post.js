const mongoose = require('mongoose');
const {ObjectID}= mongoose.Schema

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true
    },
    slug:{
        type:String,
        trim:true,
        unique:true,
        index:true,
        lowercase:true,
        required:true
    },
    content:{
        type:String,
        required:true,
        min:20,
        max:200000
    },
    user:{
        type:String,
        default:'Admin'
    }
},{timestamps:true})

module.exports = mongoose.model('Post', postSchema);