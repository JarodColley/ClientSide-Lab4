/** 
File Name: user.js
Name: Jarod Colley
StudentID: 100704994
Date: April 15th 2020
*/
// require modules for our user Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let userSchema = mongoose.Schema({
    username: 
    {
        type: String,
        default: "",
        trim: true,
        required: "username is required"
    },
    /* taken out because password will be encrypted by passport-local-mongoose
    password: 
    {
        type: String,
        default: "",
        trim: true,
        required: "password is required"
    },
    */
   email: 
    {
        type: String,
        default: "",
        trim: true,
        required: "email is required"
    },
    displayName: 
    {
        type: String,
        default: "",
        trim: true,
        required: "Display Name is required"
    },
    created: 
    {
        type: Date,
        default: Date.now()
    },
    updated: 
    {
        type: Date,
        default: Date.now()
    }
},
{
    collection: "users"  
});

// configure options of the UserSchema

let options = 
({
    missingPasswordError: "Wrong / Missing Password"
});


userSchema.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', userSchema);