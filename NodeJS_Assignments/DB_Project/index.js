const express= require("express")
const app=express();
const dotenv=require('dotenv').config()
 const port=process.env.PORT
const router= require("./routes/routes.js")

app.use(express.json())


app.use("/api",router)

app.listen(port,function(err){
    if(err){
        console.log("There is an error in starting the server")
    }

    console.log("Server is running at port ", port)
})