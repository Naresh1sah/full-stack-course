const userModel=(sequelize,DataTypes)=>{
    const User=sequelize.define("user",{
        userid:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.INTEGER
        },
        email:{
            type:DataTypes.STRING
        }
    })
return User
}
module.exports=userModel