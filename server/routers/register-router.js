const express=require("express");
const router=express.Router();
const Register=require("../dbs/register-db");

router.post("/register",(req,res)=>{
    Register.insertUser(req.body,(result)=>{
       if(result.length != 0){
           res.send(true);
       }else{
           res.send(false);
       }
    })
});

module.exports=router;


