var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var conn = require('../connectMysql/connect');
var bcrypt = require('bcrypt');
router.use(bodyParser.json());

router.get('/', (req, res)=>{
    res.render('hoantratuimau')
})

module.exports = router;