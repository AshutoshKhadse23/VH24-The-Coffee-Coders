var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('alerts');
  
  router.get('/institute-prof',(req,res)=>{
  res.render('institute-prof');
});

  router.get('/alerts', (req, res) => {
    res.render('alerts');
});

// Dashboard routes
router.get('/dashboard-change-password', (req, res) => {
    res.render('dashboard-change-password');
});

router.get('/dashboard-institute-profile', (req, res) => {
    res.render('dashboard-institute-profile');
});

router.get('/dashboard-messages', (req, res) => {
    res.render('dashboard-messages');
});

router.get('/dashboard-packages', (req, res) => {
    res.render('dashboard-packages');
});

// Institute dashboard routes
router.get('/institute-dashboard-profile', (req, res) => {
    res.render('institute-dashboard-profile');
});

router.get('/institute-raise-request', (req, res) => {
    res.render('institute-raise-request');
});

// Authentication routes
router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/login-popup', (req, res) => {
    res.render('login-popup');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/register-popup', (req, res) => {
    res.render('register-popup');
});
router.get('/request', (req, res) => {
  res.render('request');
});
});


module.exports = router;
