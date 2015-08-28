//DEPNDENCIES
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var FacebookStrategy = require('passport-facebook').Strategy;
var session = require('express-session');
var passport = require('passport');


//SERVER
var app = express();
var data = {'message': 'did you get this'};

app.use(session({secret: 'Random I am hungry stuff'}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new FacebookStrategy({
  clientID: '766945613415645',
  clientSecret: 'b7b1914ecb7e19de13f6128ccba2cd6d',
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
}, function(token, refreshToken, profile, done) {
  return done(null, profile);
}));

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback',passport.authenticate('facebook', {
	successRedirect: '/me',
	failureRedirect: '/auth/facebook'
}))

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get('/me', function(req,res){
	res.send(req.user);
})


app.listen(3000, function(){

});


