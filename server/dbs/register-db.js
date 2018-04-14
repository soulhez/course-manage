const connection = require('../helps/get-urls');

let insertUser=(information,callback)=>{
    const sql = `INSERT INTO user(name,password,identity)VALUES('${information.username}','${information.password}','T');`;
    connection.query(sql,(err,result)=>{
        if(err){
            throw err;
        }
        else{
            callback(result);
        }
    })
};

module.exports = {
    insertUser
};