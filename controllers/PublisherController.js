var Publishers = require('../models/publisher');
var Controller = require('./Controller');
var controller = new Controller();

function PublisherController() {}

PublisherController.prototype.list =
	function(req, res) {
        controller.list(req, res, Publishers);
	};
	
PublisherController.prototype.get =
	function(req, res) {
        controller.get(req, res, Publishers);
	};

PublisherController.prototype.post =
	function(req, res) {
        controller.post(req, res, PublisherController)
	};
