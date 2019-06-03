var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var server = require('http').createServer(app);
// io = require('socket.io').listen(server);
server.listen(process.env.PORT || 2019, () => {
    console.log('Đã kết nối')
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var indexRoutes = require('./routes/index');
var danhmucmachephamRoutes = require('./routes/danhmucmachepham');
var kholuutrumauRoutes = require('./routes/kholuutrumau');
var xuatmautrongbenhvienRoutes = require('./routes/xuatmautrongbenhvien');
var hoantratuimauRoutes = require('./routes/hoantratuimau');
var thanhlyRoutes = require('./routes/thanhly');
var lapphieulinhmauRoutes = require('./routes/lapphieulinhmau');
var xuatmaungoaibenhvienRoutes = require('./routes/xuatmaungoaibenhvien');
var tonghopbaocaoRoutes = require('./routes/tonghopbaocao');
var kiemkeRoutes = require('./routes/kiemke');


app.use('/', indexRoutes);
app.use('/danhmucmachepham', danhmucmachephamRoutes);
app.use('/kholuutrumau', kholuutrumauRoutes);
app.use('/xuatmautrongbenhvien', xuatmautrongbenhvienRoutes);
app.use('/hoantratuimau', hoantratuimauRoutes);
app.use('/thanhly', thanhlyRoutes);
app.use('/lapphieulinhmau', lapphieulinhmauRoutes);
app.use('/xuatmaungoaibenhvien', xuatmaungoaibenhvienRoutes);
app.use('/tonghopbaocao', tonghopbaocaoRoutes);
app.use('/kiemke', kiemkeRoutes);

