const {Sequelize,DataTypes}=require("sequelize")
const sequelize=new Sequelize(
   
"postgresql://postgres.gocrloctwcfdsmvtiobu:nksupabase12@aws-1-ap-south-1.pooler.supabase.com:6543/postgres"
)
sequelize.authenticate()
.then(()=>{
    console.log("authenticated vayo,connected vayo")
})
.catch((err)=>{
        console.log("Error aayo" + err)

})
const db={}
db.sequelize=sequelize
db.Sequelize=Sequelize
module.exports=db