module.exports.renderHome = function(req, res){
  res.render('static_pages/index', {title: 'Home Page'});
};

module.exports.renderAbout = function(req, res) {
  res.render('static_pages/about', {title: 'About me'});
};

module.exports.renderContact = function(req, res) {
  res.render('static_pages/contact', {title: 'contact me'});
};

// module.exports.renderError = function(req, res){
//   res.render('static_pages/error', {title: 'Undefined'});
// };
