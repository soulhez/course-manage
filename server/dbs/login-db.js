const connection = require('../helps/get-urls');

let findUser=(information,callback)=>{
    const sql = `select * from user where name='${information.userName}';`;
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
findUser
};