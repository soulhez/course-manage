const express=require("express");
const router=express.Router();
const CourseManage=require("../dbs/courseManage-db");

router.post("/insertCourse",(req,res)=>{
    CourseManage.insertCourse(req.body,res);
});

router.post("/allCourses",(req,res)=>{
    CourseManage.queryCourse(req,res);
});

module.exports=router;
