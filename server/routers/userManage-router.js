const express=require("express");
const router=express.Router();
const userManage=require("../dbs/userManage-db");

router.post("/allUsers",(req,res) =>{
   userManage.findAllUsers((result)=>{
      res.json({users:result});
   })
});

module.exports=router;