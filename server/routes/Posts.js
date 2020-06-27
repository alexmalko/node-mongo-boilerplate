const express = require('express');
const router = express.Router();
const Item = require('../models/Item'); //bring in Users model

// @route GET /api/hello
// @ desc get items
// Delete
router.get('/', async (req, res) => {
	try {
		const item = await Item.find();
		res.json(item);
	} catch (err) {
		console.error(err.message);
		res.status(500).send({ message: 'failed to Post' });
	}
});

// @route POST /api/hello
// @ desc post items
// Create
router.post('/', async (req, res) => {
	try {
		const newItem = new Item({
			name: req.body.name
		});
		const item = await newItem.save();
		res.json(item);
	} catch (err) {
		console.error(err.message);
		res.status(500).send({ message: 'failed to Post' });
	}
});

// @route DELETE /api/hello
// @ desc delete  items
// Delete
router.delete('/:id', async (req, res) => {
	try {
		const deletedItem = await Item.findById(req.params.id);
		console.log(deletedItem);
		await deletedItem.remove();
		res.json({ msg: 'Item removed', item: deletedItem });
	} catch (err) {
		console.error(err.message);
		res.status(500).send({ message: 'invalid ID' });
	}
});

// @route Patch /api/hello
// @ desc update items
// Update
router.patch('/:id', async (req, res) => {
	try {
		const updatedItem = await Item.updateOne(
			{ _id: req.params.id },
			{
				$set: {
					name: req.body.name
				}
			}
		);
		res.json({ msg: 'Item updated', item: updatedItem });
	} catch (err) {
		console.error(err.message);
		res.status(500).send({ message: 'invalid ID' });
	}
});

module.exports = router;
