// Test sequelize and mysql

var Sequelize = require('sequelize')

var sequelize = new Sequelize('bonfirebiblio', 'root', 'lucien', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});


// +------------------------+-------------+------+-----+---------+----------------+
// | Field                  | Type        | Null | Key | Default | Extra          |
// +------------------------+-------------+------+-----+---------+----------------+
// | id                     | int(11)     | NO   | PRI | NULL    | auto_increment |
// | created_at             | timestamp   | YES  |     | NULL    |                |
// | updated_at             | timestamp   | YES  |     | NULL    |                |
// | name                   | varchar(50) | YES  |     | NULL    |                |
// | contact_information_id | int(11)     | YES  |     | NULL    |                |
// +------------------------+-------------+------+-----+---------+----------------+
var Author = sequelize.define('author', {
    name: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true
})

Author.sync({force: true}).then(function() {
    return Author.create({
        name: 'Jonny AUthor',
    })
})

Author.sync({ force: true}).then(function() {
    return Author.create({
        name: 'Someone Else',
    })
})
