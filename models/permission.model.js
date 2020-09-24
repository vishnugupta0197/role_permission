const Sequelize = require('sequelize');
const sql = require('../util/db');

module.exports = sql.define('permission',{
    permission_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    permission_value:{
        type:Sequelize.STRING
    },
    feature:{
        type:Sequelize.STRING
    }

},{timestamps:false})