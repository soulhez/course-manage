const express=require("express");
const router=express.Router();
const userManage=require("../dbs/userManage-db");

router.post("/allUsers",(req,res) =>{
   userManage.findAllUsers(res);
});

router.post("/removeUser", (req, res) => {
    let user_id=req.body.user_id;
  userManage.removeUser(user_id,res);
});

module.exports=router;