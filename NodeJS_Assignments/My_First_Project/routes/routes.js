const express= require("express")
const router = express.Router()

router.get("/",function(req,res){
    console.log("This is my first API")
    res.send("This is my first API request implemented")
})

router.get("/userinfo",function(req,res){
    console.log(req.query["user_id"])
    console.log("This is my first API")
    res.send("This is my first userinfo API request implemented")
})

//request params 
//127.0.0.1:8000/api/v1/userinfo/1 Here 1 is the ID the parameter is defined in the api path
router.get("/userinfo/:id",function(req,res){
    console.log(req.params)
    console.log("This is my first API")
    res.send("This is my first userinfo API request implemented")
})

router.post("/userinfo",function(req,res){
    console.log("This is my first API")
    res.send("This is my first POST API request implemented")
})

router.put("/userinfo",function(req,res){
    console.log("This is my first API")
    res.send("This is my first PUT API request implemented")
})

router.delete("/userinfo",function(req,res){
    console.log("This is my first API")
    res.send("This is my first Delete API request implemented")
})
module.exports=router;