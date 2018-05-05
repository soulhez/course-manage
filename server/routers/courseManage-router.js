const express=require("express");
const router=express.Router();
const CourseManage=require("../dbs/courseManage-db");

router.post("/insertCourse",(req,res)=>{
    console.log(req.body);
    CourseManage.insertCourse(req.body,res);
});

router.post("/allCourses",(req,res)=>{
    CourseManage.queryCourse(req,res);
});

router.post("/removeCourse",(req,res) => {
    CourseManage.removeCourse(req.body.course_id,res);
});

module.exports=router;
