function Controller() {}

Controller.prototype.generateId =
    function() {
        // Generate function
    };

Controller.prototype.list =
    function(req, res, calledObject) {
        calledObject.find(function(err, returnedObjects) {
            if (err)
                res.send(err);

            res.json(returnedObjects);
        });
    };

Controller.prototype.get =
    function(req, res, calledObject) {
        calledObject.findById(req.params.id, function(err, returnedObject) {
            if (err)
                res.send(err);
            res.json(returnedObject);
        });
    };

Controller.prototype.post =
    function(req, res, calledObject) {
        var newObject = new calledObject(req.body);

        newObject.save(function(err, newObject) {
            if (err)
                res.send(err);

            res.json(newObject);
        });
    };

Controller.mixin = function(destinationObject) {
    ['generateId'].forEach(function(property) {
        destinationObject.prototype[property] = Controller.prototype[property];
    });
};

module.exports = Controller;