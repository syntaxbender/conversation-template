//js
const express = require('express');
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs')
app.use('/assets/css', [
    express.static(__dirname + '/assets/css/')
    //require('./routes/login')
]);
app.use('/assets/js', [
    express.static(__dirname + '/node_modules/jquery/dist/'),
    express.static(__dirname + '/node_modules/inputmask/dist/'),
    //require('./routes/login')
]);
app.use('/assets/images/', [
    express.static(__dirname + '/assets/img/')
]);

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
});
app.get('/chats', function (req, res) {
  res.render('chats', { title: 'Hey', message: 'Hello there!' })
});
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});