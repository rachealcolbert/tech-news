const Sequelize = require('sequelize');

const sequelize = new Sequelize('technews_db', 'username', 'password', {
    host: 'locathost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;