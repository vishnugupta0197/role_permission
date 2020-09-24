const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/db');
const route = require('./routes/user.route');
const User = require('./models/user.model');
const role = require('./models/role.model');
const userRole = require('./models/user_role.model');
const permissionModel = require('./models/permission.model');
const permission_roleModel = require('./models/permission_role.model');
const router = require('./routes/user.route');
var app = express();

app.use(bodyParser.urlencoded({extended:true}))

//syncing models
role.belongsToMany(User,{through:userRole})
User.belongsToMany(role,{through:userRole})
permissionModel.belongsToMany(role,{through:permission_roleModel})
role.belongsToMany(permissionModel,{through:permission_roleModel})
sequelize.sync().then((data)=>{
    console.log('data',data)
    app.listen(3000)
})

app.use(router)

app.use((err,req,res,next)=>{
    console.log('now is errrormiddl',err.statusCode)
    const status = err.statusCode || 500
    if(err){
        res.status(status).json({
            message:err.message
        })
    }
});



