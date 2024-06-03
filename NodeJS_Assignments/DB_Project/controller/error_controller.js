const express= require("express")
const error_handler = function(error, req, res, statusCode)
{
    res.statusCode=statusCode
    res.set({"Content-Type":"application/json"})
    if(statusCode===500){
        res.send({
            "message":"Somenthing went wrong"
        })
    }else if(statusCode===400)
        {
            res.send({
                "message":"Bad API request"
            })
        }else{
            res.send({
                "message":"Internal Server error"
            })
        }
    
}

module.exports=error_handler