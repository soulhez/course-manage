const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve('public/uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage});
app.post('/image', upload.single('avatar'), (req, res, next)=> {
    res.send({
        err: null,
        filePath: '../uploads/' + path.basename(req.file.path)
    });
});

app.post('/audio', upload.single('avatar'), (req, res, next)=> {
    res.send({
        err: null,
        filePath: '../uploads/' + path.basename(req.file.path)
    });
});


const login=require("./server/routers/login-router");
const register=require("./server/routers/register-router");
const logout=require("./server/routers/logout-router");
const userManage=require("./server/routers/userManage-router");
const courseManage=require("./server/routers/courseManage-router");



app.use(express.static("public"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("./public"));



app.get("*", (req, res) => {
    "use strict";
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
app.use(cookieParser());
app.use(session({
    secret: "a",
    resave: true,
    saveUninitialized: true
}));


app.use("/",login);
app.use("/",register);
app.use("/",logout);
app.use("/", userManage);
app.use("/",courseManage);



var server = app.listen(3000, () => {
    console.log("listening at port %s", server.address().port);
});

module.exports = server;