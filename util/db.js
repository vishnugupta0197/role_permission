//contains db connection logic
const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize('node_newapp','root','@Vs983500',{
  host:'localhost',
 dialect:'mysql'
})

//return a promised connection pool
module.exports = sequelize;

// const Sequelize = require('sequelize').Sequelize;

// const sql = new Sequelize('<DB-NAME>','<USERNAME>','<PASSWORD>',{
//     dialect:'<DB-DIALECT>',
//     host:'<DB-HOST-IP>'
// })

// module.exports = sql