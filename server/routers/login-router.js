const express = require("express");
const router = express.Router();
const Login=require("../dbs/login-db");

router.post('/login', (req, res) => {

    var information=req.body;
    Login.findUser(req,information,res)
});


module.exports = router;