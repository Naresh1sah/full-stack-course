

const bookModel=(sequelize,DataTypes)=>{
    const Book=sequelize.define("book",{
        boookName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        bookPrice:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        bookAuthor:{
            type:DataTypes.STRING,
        },
        bookGenere:{
            type:DataTypes.STRING
        }

    })
    return Book
}
module.exports=bookModel