const express= require("express")
const router = express.Router()
const connection= require("../mysql/mysql.js")
const error_handler=require("../controller/error_controller.js")

router.get("/",function(req,res){
    const user_query="Select * from user"
    connection.query(user_query, function(error, results){
        if(error)
            {
                error_handler(error,req,res,400)
            } else {
                if(results.length>0)
                    {
                       const response_body=results
                       res.set({"Content-Type":"Application/JSON"})
                       res.statusCode=200
                       res.send(response_body)
                    }
                else{
                    res.send({"message":"No Users"})
                }
            }
    })
})

router.get("/userinfo",function(req,res){
    const user_id=req.query.UserID
    const user_query="Select * from user where UserID=?"
    connection.query(user_query,[user_id], function(error, results){
        if(error)
            {
                error_handler(error,req,res,500)
            } else {
                if(results.length>0)
                    {
                       const response_body=results
                       res.set({"Content-Type":"Application/JSON"})
                       res.statusCode=200
                       res.send(response_body)
                    }
                else{
                    res.send({"message":"No Users"})
                }
            }
    })
})


module.exports = router;