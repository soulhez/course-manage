const express = require("express");
const router = express.Router();
const Login=require("../dbs/login-db");

router.post('/login', (req, res) => {

    var information=req.body;
    Login.findUser(information,(result)=>{
        console.log(result);
        if(result.length === 0) {
            res.json({isTrue: "0"});
        }else{
           res.json({isTrue:"1"});
        }
    })
});


module.exports = router;