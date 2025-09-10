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

db.books=require("./models/book.model")(sequelize,DataTypes)
db.users=require("./models/user.model")(sequelize,DataTypes)
db.products=require("./models/product.model")(sequelize,DataTypes)
sequelize.sync({alter:true}).then(()=>{
    console.log("mig")
})
module.exports=db