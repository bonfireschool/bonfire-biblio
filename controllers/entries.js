var Entries = require('../models/entry');

exports.list =
    function(req, res) {
        Entries.find(function(err, entries) {
            if (err)
                res.send(err);

            res.json(entries);
        });
    };

exports.get =
    function(req, res) {
        Entries.findById(req.params.entry_id, function(err, entry) {
            if (err)
                res.send(err);
            res.json(entry);
        });
    };

