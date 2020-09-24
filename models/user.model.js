const Sequelize = require('sequelize');
const sql = require('../util/db');

module.exports = sql.define('user',{
    user_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    user_name:{
        type:Sequelize.STRING
    }
},{timestamps:false})