const passport = require('passport')
, LocalStrategy = require('passport-local').Strategy
, db = require('../models')

// Serialize Sessions
passport.serializeUser(function(user, done){
  done(null, user);
});

//Deserialize Sessions
passport.deserializeUser(function(user, done){
  db.Tutor.findOne({_id: user._id}).then(function(user){
      done(null, user);
  }).error(function(err){
      done(err, null)
  });
});

// For Authentication Purposes
passport.use(new LocalStrategy(
  function(username, password, done){
      db.Tutor.findOne({username: username}).then(function(user){
          // console.log(user);
          passwd = user ? user.password : ''
          isMatch = db.Tutor.validPassword(password, passwd, done, user)
      });
  }
));