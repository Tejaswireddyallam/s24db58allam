// Import required modules
var express = require('express');
var passport = require('passport');
var router = express.Router();
var Account = require('../models/account'); // Import the Account model

// Route to render the index page
router.get('/', function (req, res) {
  res.render('index', { title: 'Heritagesite App', user : req.user });
});

// Route to render the registration page
router.get('/register', function(req, res) {
  res.render('register', { title: 'Heritagesite App Registration' });
});

// Route to handle user registration
router.post('/register', function(req, res) {
  // Check if the username already exists in the database
  Account.findOne({ username : req.body.username })
  .then(function (user){
    if(user != null ){
      console.log("exists " + req.body.username);
      return res.render('register', { title: 'Registration', 
        message: 'Existing User', account : req.body.username });
    }
    // If username doesn't exist, create a new account
    let newAccount = new Account({ username : req.body.username });
    Account.register(newAccount, req.body.password, function(err, user){
      if (err) {
        console.log("db creation issue "+ err);
        return res.render('register', { title: 'Registration', 
          message: 'access error', account : req.body.username });
      }
      if(!user){
        return res.render('register',{ title: 'Registration', 
          message: 'access error', account : req.body.username });
      }
    });
    console.log('Success, redirect');
    res.redirect('/');
  })
  .catch(function (err){
    return res.render('register', { title: 'Registration', 
      message: 'Registration error', account : req.body.username });
  });
});

// Route to render the login page
router.get('/login', function(req, res) {
  res.render('login', { title: 'Heritagesite App Login', user : req.user });
});

// Route to handle user login
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

// Route to handle user logout
router.get('/logout', function(req, res) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

// Route to handle ping request
router.get('/ping', function(req, res){
  res.status(200).send("pong!");
});


// Export the router module
module.exports = router;


