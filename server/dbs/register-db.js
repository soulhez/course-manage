const connection = require('../helps/get-urls');

let insertUser = (information, res)=> {
    const sql = `INSERT INTO user(name,password,identity)VALUES('${information.username}','${information.password}','${information.identity}');`;
    connection.query(sql, (err, result)=> {
        if (err) {
            res.json(false);
        }
        else {
            res.json(true);
        }
    })
};

module.exports = {
    insertUser
};