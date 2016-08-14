module.exports = function(app) {

  var staticPageController = require('../controllers/staticpage.server.controller');

  var usersController = require('../controllers/users.server.controller');


  app.get('/', staticPageController.renderHome);
  app.get('/about', staticPageController.renderAbout);
  app.get('/contact', staticPageController.renderContact);
  // app.get('/:undefined', staticPageController.renderError );
  app.get('/users', usersController.index);
  app.get('/users/:name', usersController.show);
};
