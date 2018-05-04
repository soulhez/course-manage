const connection = require('../helps/get-urls');

let insertCourse=(information,res)=>{
    const sql = `INSERT INTO source(title,description,teacher,duration,publish_date,image_path,audio_path
    )VALUES('${information.title}','${information.description}','${information.teacher}',
    '${information.duration}','${information.date}','${information.image}','${information.audio}');`;
    console.log(sql);
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
    insertCourse
};