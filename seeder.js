// This is a seeder script, not to be used in production. 

var mongoose = require('mongoose');
mongoose.connect('mongodb://bonfire:bonfire@ds149049.mlab.com:49049/bonfire');

var Categories = require('./models/categories');
var Authors = require('./models/authors');
var Entries = require('./models/entries');
var Notes = require('./models/notes');
var Publishers = require('./models/publishers');
var Quotes = require('./models/quotes');

// 1.) Empty out the database
Categories.find({}, function(err, categories) {

	if (err) throw err;

	categories.forEach(function(category) {
		category.remove(function(err) {
			if (err) throw err;
		});
	});
});

Quotes.find({}, function(err, quotes) {
	if (err) throw err;

	quotes.forEach(function(quote) {
		quote.remove(function(err) {
			if (err) throw err;
		});
	});
});

Authors.find({}, function(err, authors) {
	if (err) throw err;

	authors.forEach(function(author) {
		author.remove(function(err) {
			if (err) throw err;
		});
	});
});

Notes.find({}, function(err, notes) {
	if (err) throw err;

	notes.forEach(function(note) {
		note.remove(function(err) {
			if (err) throw err;
		});
	});
});

Publishers.find({}, function(err, publishers) {
	if (err) throw err;

	publishers.forEach(function(publisher) {
		publisher.remove(function(err) {
			if (err) throw err;
		});
	});
});

Entries.find({}, function(err, entries) {
	if (err) throw err;

	entries.forEach(function(entry) {
		entry.remove(function(err) {
			if (err) throw err;
		});
	});
});


// 2.) Populate new entries
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


