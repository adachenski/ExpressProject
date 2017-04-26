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

var details = function(req, res){
    var customer = db.getCustomerById(req.params.id);
    res.render('customers/details',{customer:customer});
}

var edit = function(req, res){
    var customer = db.getCustomerById(req.params.id);
    res.render('customers/editCustomer',{customer: customer});
}

var editCustomer = function(req, res){
    db.updateCustomer({name: req.body.name, email: req.body.email, telephone: req.body.telephone });
    res.redirect('/customers')
}

var deleteCust = function(req, res){
    db.deleteCustomer(req.params.id);
    res.redirect('/customers');
}

module.exports ={
    view:view,
    contact: contact,
    create: create,
    createCustomer:createCustomer,
    render:render,
    details:details,
    edit:edit,
    editCustomer:editCustomer,
    deleteCust:deleteCust
}