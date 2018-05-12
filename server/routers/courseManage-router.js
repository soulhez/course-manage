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

router.post("/editCourse",(req,res) => {
    CourseManage.editCourse(req.body.data,res);
});

router.post("/insertCommit",(req,res) =>{
    CourseManage.insertCommit(req.body,res);
});

module.exports=router;
