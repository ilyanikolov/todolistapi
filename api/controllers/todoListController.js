'use strict';

const mongoose = require('mongoose'),
	Task = mongoose.model('Tasks');

exports.getTasks = function(req, res) {
	Task.find({}, (err, task) => {
		if(err) res.send(err);
		
		res.json(task);
	});
};
exports.getTask = function(req, res) {
	Task.findById(req.params.taskId, (err, task) => {
		if(err) res.send(err);

		res.json(task);
	});
};
exports.createTask = function(req, res) {
	let task = new Task(req.body);
	task.save((err, task) => {
		if(err) res.send(err);

		res.json(task);
	});
};
exports.updateTask = function(req, res) {
	Task.findByIdAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, (err, task) => {
		if(err) res.send(err);

		res.json(task);
	});
};
exports.deleteTask = function(req, res) {
	Task.remove({ _id: req.params.taskId }, (err, taks) => {
		if(err) res.send(err);

		res.json({ message: 'Task successfully deleted' });
	});
};