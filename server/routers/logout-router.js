const express = require("express");
const router = express.Router();

router.post("/logout", (req, res)=> {
    res.cookie('user', "", 'path=/');
    res.send({user: ""});
});

module.exports = router;