const express=require("express");
const router=express.Router();
const CourseManage=require("../dbs/courseManage-db");

router.post("/insertCourse",(req,res)=>{
    CourseManage.insertCourse(req.body,res);
});

module.exports=router;
