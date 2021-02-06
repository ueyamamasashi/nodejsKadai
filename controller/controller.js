const express = require('express');
const router = express.Router();

exports.login = //function(req, res) {
    router.get('/login', function(req, res, next) {
        res.render('login', { title: 'Laravel', subject: 'Login' });
      });
//};
exports.register = //function(req, res) {
    router.get('/register', function(req, res, next) {
        res.render('register', { title: 'Laravel', subject: 'Register' });
      });
//};