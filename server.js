const express = require('express');
// const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const ejs = require('ejs');
const jade = require('jade');
const path = require('path');

var server = express();

server.listen(8080);

server.use(express.static('./www'));

server.use(cookieParser("alksdjflk"));

//session
// let arr = [];
// for (var i = 0; i < 100000; i++) {
//   arr.push("Keys_" + Math.random());
// }
// server.use(cookieSession({
//   name: "demo_id",
//   keys: arr,
//   maxAge: 20 * 3600 * 1000
// }))

//post

server.use(bodyParser.urlencoded({
  extended: false
}));

//multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './www/upload');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({
  storage: storage
});
server.post('/profile', upload.single('avatar'), (req, res, next) => {
  // const url = 'http://' + req.headers.host + '/upload/' + req.file.orginalname;
  res.send({
    err: null,
  });
});

//用户请求

// server.use("/", (req, res, next) => {
//   console.log(req.query, req.body, req.files, req.cookies, req.session);
// });
