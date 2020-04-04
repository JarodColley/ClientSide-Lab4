/** 
File Name: contact.js
Name: Jarod Colley
StudentID: 100704994
Date: April 4th 2020
*/
let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    contactNumber: String
},
{
    collection: 'contacts'
});

module.exports = mongoose.model('contact', contactSchema);