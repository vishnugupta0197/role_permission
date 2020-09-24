const Sequelize = require('sequelize');
const sql = require('../util/db');

module.exports = sql.define('user_role',{
    user_role_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    }
},{timestamps:false})