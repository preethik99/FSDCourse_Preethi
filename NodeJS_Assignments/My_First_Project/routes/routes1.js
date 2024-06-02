const express= require("express")
const router = express.Router()

router.get("/userinfo",function(req,res){
    console.log("This is my first API")
    res.send("This is my first userinfo route1 file api API request implemented")
})

module.exports=router;