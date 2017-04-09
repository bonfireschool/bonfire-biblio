var Publishers = require('../models/publisher');

exports.list = 
	function(req, res) {
		Publishers.find(function(err, publishers) {
			if (err)
				res.send(err);

			res.json(publishers);
		});
	};
	
exports.get = 
	function(req, res) {
		Publishers.findById(req.params.publisher_id, function(err, publisher) {
			if (err)
				res.send(err);
			res.json(publisher);
		});
	};

