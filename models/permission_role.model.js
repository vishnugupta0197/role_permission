const Sequelize = require('sequelize');
const sql = require('../util/db');

module.exports = sql.define('permission_role',{
    permission_role_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    }
},{timestamps:false})