const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        required : true,
        typeof: String,
        trim: true,
    },

    email :{
        required : true,
        typeof: String,
        trim: true,
        validate : {
            
        }
    }
})