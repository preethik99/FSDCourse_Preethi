const express= require("express")
const app=express()
const dotenv=require('dotenv').config()
port = process.env.PORT

//route is used to impliment API's in better way
const routes= require("./routes/routes.js")
const routes1= require("./routes/routes1.js")

app.use("/api/v1",routes)
app.use("/api/v2",routes1)

//-------------------------------------------------------------------------------------------
// //127.0.0.1:8000/api
// //when the server sees /api path the it will see this part of thd code
// app.get("/api",function(req,res){
//     console.log("This is my first API")
//     res.send("This is my first API request implemented")
// })

// //127.0.0.1:8000/api1
// //Json data as response 
// app.get("/api1",function(req,res){
//     console.log("This is my first API")
//     res.json({"Message":"This is my first API request implemented"})
// })

// //127.0.0.1:8000/api2
// //Setting response headers
// app.get("/api2",function(req,res){
//     res.statusCode = 400;
//     res.set({
//         "Content-type":"application/json"
//     })
//     res.send({"Message":"There is and error in the API Request"})
// })
//-------------------------------------------------------------------------------------------------


// When the server see the port number it will be listining here it is 8000
app.listen(port,function(err){
    if(err){
        console.log("There is an error in starting the server")
    }
    console.log("Server is running at port ", port)
})