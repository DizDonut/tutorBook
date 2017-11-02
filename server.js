const express = require("express");
var session = require('express-session');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const http = require('http');
const passport = require('passport');
const passportConfig = require('./config/passport')
const application = require('./routes/api/application');
const db = require("./models");

const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("./public"));
// Add routes, both API and view
app.use(routes);

//PASSPORT.JS related
app.use(session({
  secret: 'baobaorocks',
  resave: false,
  saveUninitialized: false}))
app.use(passport.initialize())
app.use(passport.session())

app.post('/authenticate',passport.authenticate('local',{
  successRedirect: '/login',
  failureRedirect: '/'
  })
)

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/baobaoBook",
  {
    useMongoClient: true
  })
  .then(function(err){
    //create a tutor document, and add it if one isn't in db already.
    //use this for testing purposes
    var devTutor = new db.Tutor({
      username:'admin',
      email:'admin@test.com',
      password:'admin'
    });

    // Start the API server
    db.Tutor.findOne({username: "admin"}).then(function (user) {
      // .update({username: 'admin'},{devTutor},{upsert:true}).then(function (user){
        if (!user) {
          db.Tutor.addHash(devTutor,function(err,user) {
            if (err) return handleError(err);
            // saved!
            devTutor.save(function(error,doc) {
              if (error) {
                console.log(error)
              }
            })
            console.log(`logged in with ${user}`)
          })
        }

        var newStudent = new db.Student({
            picture: "https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP0001-CUSA05855_00-AV00000000000010/1508519815000/image?_version=00_09_000&platform=chihiro&w=225&h=225&bg_color=000000&opacity=100",
            firstName: "Clay",
            lastName: "Crawley",
            age: "29",
            description: "Awesomeness! A joy to teach. Taught me everything I know!",
            location: "Cherryville",
            classVideo: "",
            family: "One brother. All kinds of friends.",
            likes: "Movies, Coding, Coffee, lots of Coffee, all the Coffee",
            birthday: "January 30"
          });

        newStudent.save(function(error,doc) {
            if (error) {
              console.log(error)
            }
            db.Tutor.updateOne({ username: "admin" }, {$set: {"students": [doc._id] }})
            .exec(function(err,doc) {
              if (err) {
                console.log(err);
              }
              console.log(`student added:`);
              console.log(doc);
              // Start the API server
              app.listen(PORT, function() {
                console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
              });
            })
        })
    });
  });
