var express = require('express'),
    path =  require('path'),
    app = express(),
    bodyParser = require('body-parser'),
    home = require('./routes/home.js'),
    customers = require('./routes/customers.js');


app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', home);

app.get('/:viewname', customers.view);

app.listen(3000, function(){
    console.log('Server is running on port 3000');
});