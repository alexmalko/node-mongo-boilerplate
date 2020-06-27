const mongoose = require('mongoose');

// creating a schema for the user in the database
const ItemSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},

	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('items', ItemSchema);
