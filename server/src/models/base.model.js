import {Sequelize} from "sequelize";
import {APP_DB} from "../config";

const sequelize = new Sequelize(APP_DB.database, APP_DB.username, APP_DB.password, {
    host: APP_DB.host,
    dialect: 'mysql',
})

export default sequelize;
