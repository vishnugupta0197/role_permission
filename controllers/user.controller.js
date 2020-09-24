const User = require('../models/user.model')
const Role = require('../models/role.model')
const Permisson = require('../models/permission.model')
const home = async (req,res,next)=>{
    let featuresArray = [];
    const userId = req.params.userId;
    const user = await User.findByPk(userId,{include:[{
        model:Role,
        include:[{
            model: Permisson,
            where:{feature:'Home'}
         }]
    }]});
    if(!user){
        res.status(404).send({"message":"User Not Found"})
     }
     else{
    if(user.roles.length>0)
    {
    let data = [...user.roles[0].permissions]
    console.log('data',data)
   res.status(200).json(data)
    }
    else{
        res.status(404).send({"message":"User has no permissions"})
    }
     }

}

const community = async (req,res,next)=>{
    console.log('communityyyy')
    let featuresArray = [];
    const userId = req.params.userId;
    const user = await User.findByPk(userId,{include:[{
        model:Role,
        include:[{
            model: Permisson,
            where:{feature:'Community'}
         }]
    }]});
    if(!user){
        res.status(404).send({"message":"User Not Found"})
     }
     else{
    if(user.roles.length>0)
    {
    let data = [...user.roles[0].permissions]
    console.log('data',data)
   res.status(200).json(data)
    }
    else{
        res.status(404).send({"message":"User has no permissions"})
    }
}

}

const shop = async (req,res,next)=>{
   
    const userId = req.params.userId;
    const user = await User.findByPk(userId,{include:[{
        model:Role,
        include:[{
           model: Permisson,
           where:{feature:'Shop'}
        }]
    }]});
    if(!user){
        res.status(404).send({"message":"User Not Found"})
     }
     else{
    if(user.roles.length>0)
    {
    let data = [...user.roles[0].permissions]
    console.log('data',data)
   res.status(200).json(data)
    }
    else{
        res.status(404).send({"message":"User has no permissions"})
    }
}
}

module.exports = {
    home:home,
    community:community,
    shop:shop
}