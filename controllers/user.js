const { sendErrorResponse } = require("../helper/sendError");
const notes = require("../models/userSchema");

// add items
const AddItems = async (req, res) => {
    try {
        const { body } = req;
        const newItem = new notes(body);
        const savedItem = await newItem.save();
        res.status(201).json({ status: 201, item: savedItem });
    } catch (error) {
        sendErrorResponse(res, 'Error adding item: ' + error.message);
    }
};

// get all items
const GetAllItems = async (req, res) => {
    try {
        const allItems = await notes.find();
        res.status(200).json({ status: 200, notes: allItems });
    } catch (error) {
        sendErrorResponse(res, 'Error fetching items: ' + error.message);
    }
};

// edit itema by id
const EditItems = async (req, res) => {
    const { title, description } = req.body;
    const editItems = {};

    if (title) editItems.title = title;
    if (description) editItems.description = description;

    try {
        const updatedItems = await notes.findOneAndUpdate(
            { _id: req.params.id },
            { $set: editItems },
            { new: true }
        );
        res.status(200).json({ status: 200, updatedItems });
    } catch (error) {
        sendErrorResponse(res, 'Error editing item: ' + error.message);
    }
};

module.exports = { AddItems, GetAllItems, EditItems };
