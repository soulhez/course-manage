const connection = require('../helps/get-urls');

let findUser=(req,information,res)=>{
    const sql = `select * from user where name='${information.userName}';`;
    connection.query(sql,(err,result)=>{
        if(err){
            throw err;
        }
        else{
            if(result.length === 0) {
                res.send({isTrue: "0"}); //用户名不存在
            }else if(information.passWord !== result[0].password){
                res.send({isTrue:"-1"});//密码不正确
            }else if(information.identity !== result[0].identity){
                res.send({isTrue:"-2"});// 身份错误
            } else{
                req.session.loginUser = result[0].name;
                req.session.isLogin = true;
                var Cookie = {};
                req.headers.cookie && req.headers.cookie.split(';').forEach((cookie)=>{
                    var part = cookie.split('=');
                    Cookie[part[0].trim()] = (part[1]||'').trim();
                });
                if(Cookie.user !== req.session.loginUser){
                    res.cookie('user',req.session.loginUser,'path=/');
                }
                res.send({isTrue:"1",user:req.session.loginUser,identity:result[0].identity});
            }
        }
    })
};

module.exports = {
findUser
};