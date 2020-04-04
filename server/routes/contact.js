/** 
File Name: contact.js
Name: Jarod Colley
StudentID: 100704994
Date: April 4th 2020
*/
let express = require('express');
let router = express.Router();

// connect the contactsController
let contactController = require('../controllers/contact');

/* GET Contact List page - READ Operation */
router.get('/', contactController.displayContactList);

/* GET request to perform the delete action */
router.get('/delete/:id', contactController.performDelete);

module.exports = router;