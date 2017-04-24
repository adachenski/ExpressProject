var home = function(req, res){
    res.render('index', {title:'Nasko', firstParagraph:'Welcome to Home Page'});
};

module.exports = home;