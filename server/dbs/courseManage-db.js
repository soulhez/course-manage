const connection = require('../helps/get-urls');

let insertCourse=(information,res)=>{
    let sql = `INSERT INTO source(title,description,teacher,duration,publish_date,image_path,audio_path
    )VALUES('${information.title}','${information.description}','${information.teacher}',
    '${information.duration}','${information.date}','${information.image}','${information.audio}');`;
    connection.query(sql,(err,result)=>{
        if(err){
            res.json(false);
        }
        else{
            res.json(true);
        }
    })
};

let queryCourse=(req,res)=>{
    let sql=`select * from source;`;
    connection.query(sql,(err,result)=>{
        if(err){
            res.json(false);
        }
        else{
            res.json({courses:result});
        }
    })
};

let removeCourse=(course_id,res) =>{
   let sql=`delete from source where id=${course_id}`;
    connection.query(sql,(err,result)=>{
        if(err){
            res.json(false);
        }
        else{
            res.json(true);
        }
    })
};

module.exports = {
    insertCourse,
    queryCourse,
    removeCourse
};