'use strict';

var customerDB = {};
var id_cust = 0;

exports.addCustomer = function(customer){
    id_cust = id_cust+1;
    customer.id = id_cust;
    customerDB[customer.id] = customer;
}

exports.getCustomerById = function(id){
    return customerDB[id];
}

exports.deleteCustomer = function(id){
    return customerDB[id].remove();
}

exports.updateCustomer = function(customer){
    return customerDB[customer.id] = customer;
}

exports.listCustomers = function(){
    return customerDB;
}