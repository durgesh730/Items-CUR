// express
const express = require('express');
const router = express.Router();

// contollers
const {
    AddItems,
    GetAllItems,
    EditItems
} = require('../controllers/user');

// routes

// Add a new item to the database
router.post('/additems', AddItems);

// Fetch all notes from the database
router.get("/getitems", GetAllItems);

// Update a note by ID
router.put('/edititems/:id', EditItems);


module.exports = router