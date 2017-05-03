var Authors = require('../models/author');
var Controller = require('./Controller.js');
var controller = new Controller();

function AuthorController() {}

AuthorController.prototype.list =
    function(req, res) {
        return controller.list(req, res, Authors);
    };

AuthorController.prototype.get =
    function(req, res) {
        controller.get(req, res, Authors);
    };

AuthorController.prototype.post =
    function(req, res) {
        controller.post(req, res, Authors);
    };

module.exports = AuthorController;


