const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', controller.login);
router.get('/register', controller.register);
// router.get('/login', function(req, res, next) {
//   res.render('login', { title: 'Laravel', subject: 'Login' });
// });
// router.get('/register', function(req, res, next) {
//   res.render('register', { title: 'Laravel', subject: 'Register' });
// });

module.exports = router;
