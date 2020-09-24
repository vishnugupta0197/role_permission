const Sequelize = require('sequelize');
const sql = require('../util/db');

module.exports = sql.define('role',{
    role_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    role_name:{
        type:Sequelize.STRING
    }
},{timestamps:false})