// This is a seeder script, not to be used in production. 

var Category = require('../../models/Category');
var Author = require('../../models/Author');
var Entry = require('../../models/Entity');
var Note = require('../../models/Note');
var Publisher = require('../../models/Publisher');
var Quote = require('../../models/Quote');

// Empty out the database
Category.find({}, function(err, categories) {

	if (err) throw err;

	categories.forEach(function(category) {
		category.remove(function(err) {
			if (err) throw err;
		});
	});
});

Quote.find({}, function(err, quotes) {
	if (err) throw err;

	quotes.forEach(function(quote) {
		quote.remove(function(err) {
			if (err) throw err;
		});
	});
});

Author.find({}, function(err, authors) {
	if (err) throw err;

	authors.forEach(function(author) {
		author.remove(function(err) {
			if (err) throw err;
		});
	});
});

Note.find({}, function(err, notes) {
	if (err) throw err;

	notes.forEach(function(note) {
		note.remove(function(err) {
			if (err) throw err;
		});
	});
});

Publisher.find({}, function(err, publishers) {
	if (err) throw err;

	publishers.forEach(function(publisher) {
		publisher.remove(function(err) {
			if (err) throw err;
		});
	});
});

Entry.find({}, function(err, entries) {
	if (err) throw err;

	entries.forEach(function(entry) {
		entry.remove(function(err) {
			if (err) throw err;
		});
	});
});

