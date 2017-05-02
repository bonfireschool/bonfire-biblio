// This is a seeder script, not to be used in production. 

var Author = require('../../models/author');
var Entry = require('../../models/entry');
var Note = require('../../models/note');
var Publisher = require('../../models/publisher');
var Quote = require('../../models/quote');
var Category = require('../../models/category');

// Populate new entries
var newCategories = [];
newCategories.push(new Category({
	_id: 'humor',
	name: 'Humor',
}));

newCategories.push(new Category({
	_id: 'fiction',
	name: 'Fiction',
}));

newCategories.push(new Category({
	_id: 'nonfiction',
	name: 'Non-Fiction',
}))

newCategories.push(new Category({
	_id: 'spiritual',
	name: 'Spiritual',
}))

newCategories.push(new Category({
	_id: 'technical',
	name: 'Technical',
}))

newCategories.forEach(function(category) {
	category.save(function(err) {
		if (err) throw err;
		console.log("Saved category : "+category.name);
	})
})


var newAuthors = [];

newAuthors.push(new Author({
	_id: 'michaelsbomb',
	name: 'Michael Bomb',
	contact: {
		email: 'michaelsbomb@gmail.com',
	},
}));

newAuthors.push(new Author({
	_id: 'peteralevine',
	name: 'Peter A. Levine',
	contact: {
		email: 'peteralevine@gmail.com',
		cell_phone: '2452839283',
		website: 'www.authors.com'
	}
}))

newAuthors.forEach(function(author) {
	author.save(function(err) {
		if (err) throw err;
		console.log("Saved author : "+author.name);
	});
});
