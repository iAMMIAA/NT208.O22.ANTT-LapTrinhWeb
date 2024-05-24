'use strict';

require('dotenv').config({path: './.env'});

module.exports = {
    development: {
        host: process.env.BD_HOST,
        database: process.env.BD_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        dialect: 'mysql',
        seederStorage: 'sequelize',
    }
}
