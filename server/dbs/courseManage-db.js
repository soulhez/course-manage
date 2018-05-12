const connection = require('../helps/get-urls');

let insertCourse = (information, res)=> {
    let sql = `INSERT INTO source(title,description,teacher,duration,publish_date,image_path,audio_path
    )VALUES('${information.title}','${information.description}','${information.teacher}',
    '${information.duration}','${information.date}','${information.image}','${information.audio}');`;
    connection.query(sql, (err, result)=> {
        if (err) {
            res.json(false);
        }
        else {
            res.json(true);
        }
    })
};

let queryCourse = (req, res)=> {
    let sql = `select id,title,description,teacher,duration,DATE_FORMAT(publish_date,'%Y-%m-%d') publish_date,image_path,audio_path
    from source;`;
    connection.query(sql, (err, result)=> {
        if (err) {
            res.json(false);
        }
        else {
            res.json({courses: result});
        }
    })
};

let removeCourse = (course_id, res) => {
    let sql = `delete from source where id=${course_id}`;
    connection.query(sql, (err, result)=> {
        if (err) {
            res.json(false);
        }
        else {
            res.json(true);
        }
    })
};

let editCourse = (information, res)=> {
   let sql=`update source set title='${information.title}',description='${information.description}',teacher='${information.teacher}' where id=${information.id};`;
    connection.query(sql, (err, result)=> {
        if (err) {
            res.json(false);
        }
        else {
            res.json(true);
        }
    })
};

let insertCommit = (infomation,res) =>{
    let sql=`insert into commit(content,user_name,course_id)values('${infomation.commit_content}','${infomation.user_name}',${infomation.course_id});`;
    connection.query(sql, (err, result)=> {
        if (err) {
            res.json(false);
        }
        else {
          res.json(true);
        }
    })
};

let queryCommit= (course_id,res) =>{
  let sql =`select id,content,user_name,course_id,DATE_FORMAT(publish_date,'%Y-%m-%d %H:%i:%S') commit_date from commit where course_id=${course_id};`;
    connection.query(sql,(err,result)=>{
        if(err){
            res.json(false);
        }else{
            res.json({commits:result});
        }
    });
};


module.exports = {
    insertCourse,
    queryCourse,
    removeCourse,
    editCourse,
    insertCommit,
    queryCommit
};