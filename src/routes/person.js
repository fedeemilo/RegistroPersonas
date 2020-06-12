const express = require('express');
const router = express.Router();
const controller = require('../controllers/personController');

// get list of persons from database
router.get('/', controller.list);

// save a person to database
router.post('/add', controller.save);

//  get edit form to update person
router.get('/edit/:id', controller.edit);

// update person from database
router.put('/update/:id', controller.update);

// delete person from database
router.get('/delete/:id', controller.delete);

module.exports = router;
