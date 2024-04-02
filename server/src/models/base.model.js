const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.BD_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.BD_HOST,
    dialect: 'mysql',
})
