const express = require("express");
const { books } = require("./database/connection");
const app = express()

// const {books}=require("./database/connection.js")

app.get("/books",async function(req,res){
   const datas=await books.findAll()
   res.json({

      message:"book fetched successfully",datas
})
});
app.post("/books",(req,res)=>{
   res.json({
      message:"book added successfully"
})
});
app.delete("/books/:id",(req,res)=>{
   res.json({
      message:"book deleted successfully"
})
});


app.patch("/books/:id",(req,res)=>{
   res.json({
      message:"book updated successfully"
})

});


postgresql://postgres.gocrloctwcfdsmvtiobu:nksupabase12@aws-1-ap-south-1.pooler.supabase.com:6543/postgres


app.listen(4000,function(){
   console.log("backend/node t has started ort 4000")
})

