var view = function(req, res){
    res.render(req.params.viewname,{title: req.params.viewname});
}

var createCustomer = function(req, res){
    res.send('Created customer with id '+req.query.id);
}

module.exports ={
    view:view,
    createCustomer: createCustomer
}