const connection = require('../helps/get-urls');

let findUser=(information,callback)=>{
    console.log(information);
    const sql = `select * from user where name='${information.userName}' and password='${information.passWord}' and identity='${information.identity}';`;
    console.log(sql);
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