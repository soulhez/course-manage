const express=require("express");
const router=express.Router();
const Register=require("../dbs/register-db");

router.post("/register",(req,res)=>{
    Register.insertUser(req.body,res);
});

module.exports=router;


