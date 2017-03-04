// This is a seeder script, not to be used in production. 

var mongoose = require('mongoose');
mongoose.connect('mongodb://bonfire:bonfire@ds149049.mlab.com:49049/bonfire');

var Categories = require('../../models/categories');
var Authors = require('../../models/authors');
var Entries = require('../../models/entries');
var Notes = require('../../models/notes');
var Publishers = require('../../models/publishers');
var Quotes = require('../../models/quotes');

// Populate new entries
var newCategories = [];
newCategories.push(new Categories({
	_id: 'humor',
	name: 'Humor',
}));

newCategories.push(new Categories({
	_id: 'fiction',
	name: 'Fiction',
}));

newCategories.push(new Categories({
	_id: 'nonfiction',
	name: 'Non-Fiction',
}))

newCategories.push(new Categories({
	_id: 'spiritual',
	name: 'Spiritual',
}))

newCategories.push(new Categories({
	_id: 'technical',
	name: 'Technical',
}))

newCategories.forEach(function(category) {
	category.save(function(err) {
		if (err) throw err;
		console.log("Saved category : "+category.name);
	})
})

console.log("Finished populating database.");