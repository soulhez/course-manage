const connection = require('../helps/get-urls');

let findAllUsers = (callback) =>{
    let sql=`select * from user`;
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
    findAllUsers
};