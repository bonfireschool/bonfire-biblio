var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategoriesSchema = new Schema({
	_id: String,
	name: String,
});

module.exports = mongoose.model('Categories', CategoriesSchema);
