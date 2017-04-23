var express = require('express'),
    app = express(),
    home = require('./routes/home.js'),
    customers = require('./routes/customers.js');

app.get('/', home);
app.get('/customers',customers.home);
app.get('/customers/create',customers.create);

app.listen(3000, function(){
    console.log('Server is running on port 3000');
})