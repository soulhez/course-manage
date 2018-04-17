const connection = require('../helps/get-urls');

let findAllUsers = (res) =>{
    let sql=`select * from user`;
    connection.query(sql,(err,result)=>{
        if(err){
           res.json(false);
        }
        else{
            res.json({users:result});
        }
    })
};

let removeUser = (user_id,res) =>{
     let sql=`delete from user where id=${user_id}`;
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
    findAllUsers,
    removeUser
};