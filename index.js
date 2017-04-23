var express = require('express'),
    app = express();

app.get('/',function(req, res){
    res.send('Server is running get')
});

app.get('/customers',function(req, res){
    res.send('Customers page');
});


app.listen(3000, function(){
    console.log('Server is running on port 3000');
})