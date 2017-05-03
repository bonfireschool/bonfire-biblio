var Entries = require('../models/entry');
var Controller = require('./Controller');
var controller = new Controller();

function EntryController() {}

EntryController.prototype.list =
    function(req, res) {
        controller.list(req, res, Entries);
    };

EntryController.prototype.get =
    function(req, res) {
        controller.get(req, res, Entries);
    };

