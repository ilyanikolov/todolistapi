'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TaskSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Task name is required']
	},
	created_date: {
		type: Date,
		default: Date.now
	},
	status: {
		type: String,
		enum: ['pending', 'ongoing', 'completed'],
		default: 'pending'
	}
});

module.exports = mongoose.model('Tasks', TaskSchema);