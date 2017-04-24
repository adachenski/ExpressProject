var db = require('./../db.js');
var view = function(req, res){
    res.render(req.params.viewname,{title: req.params.viewname, customers: db.listCustomers()});
}

var contact = function(req, res){
    res.render('layout', {email: 'atanas@aol.com', telephone:'805-202-9410'});
}

var create = function(req, res){
    res.render('customers/create');
}

var createCustomer = function(req, res){
    db.addCustomer({name: req.body.name, email: req.body.email, telephone: req.body.telephone });
    res.redirect('/customers');
}

var render = function(req, res){
    res.render('customers/render',{title: req.params.viewname, customers: db.listCustomers()});
}

module.exports ={
    view:view,
    contact: contact,
    create: create,
    createCustomer:createCustomer,
    render:render
}