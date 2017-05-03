var Category = require('../models/category');
var Controller = require('./Controller');
var controller = new Controller();

function CategoryController() {}

CategoryController.prototype.list =
	function(req, res) {
        controller.list(req, res, Category);
	};

CategoryController.prototype.get =
	function(req, res) {
        controller.get(req, res, Category);
	};

CategoryController.prototype.post =
	function(req, res) {
        controller.post(req, res, Category);
	};

module.exports = CategoryController;
