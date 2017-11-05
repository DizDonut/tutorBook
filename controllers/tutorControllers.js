const db = require("../models");

// Defining methods for the studentsController
module.exports = {
    register: (req, res) => {
      const { username, password, email } = req.body
      db.Tutor
        .findOne({"username":username}, (err,tutorMatch) => {
          if (tutorMatch) {
            return res.json({
              error: `Sorry, already a user with the username: ${username}`
            })
          } else {}
          const newTutor = new db.Tutor({
            'username': username,
            'password': password,
            'email' : email
          })
          newTutor
          .addHash(newTutor, function(data) {
            console.log(`new tutor added ${newTutor.username}`)
            res.status(200).json({
              username:newTutor.username,
              email: newTutor.email
            });
          })
        })
    },
    login: function (req, res, done) {
      const {username, password} = req.body
        //take the plain text pass and pass it into the bcrypt function
        //return a json of the tutor data if it passes, else send a custom error
      db.Tutor
        .findOne({ 'username': username }, (err,user) => {
          // console.log(`User is ${user}`)
          if (user) {
            passwd = user ? user.password : ''
            user.validPassword(password, passwd, done, user).then(function (isMatch) {
              if (isMatch) {
                console.log(`user passed the compare function ${user}`)
                res.json({
                  id: user._id,
                  username: user.username,
                  email: user.email,
                  events: user.events,
                  students: user.students,
                  loggedIn: isMatch
                })
              } else {
                console.log(`user did not pass the compare function ${password}`)
                res.json({
                  loggedIn: false,
                  error: `Wrong pass for this user: ${password}`
                })
              }
            })
          } else {
            res.json({
              loggedIn: false,
              err: `not registered yet : ${username}`
            })
          }
          // isMatch = user.validPassword(password, passwd, done, user)
          // console.log(`passwd is ${passwd}`)
          // console.log(
          // `validPassword args are
          // password: ${password}
          // passwd: ${passwd}
          // done: ${done}
          // user: ${user}`)
        })
    },
    findAll: (req, res) => {
      db.Tutor
        .find(req.query).populate("students")
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.Tutor
        .findById(req.params.id).populate("students")
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      db.Tutor
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.Tutor
        .findOneAndUpdate({ username: req.body.username }, req.body, {upsert:true})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Tutor
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}

//add student obj id to array of teacher's students
//populate teacher model with students array (all students)
//populate teacher model with one student (by student Obj Id)
//remove student from teacher model
//updated student information for specifict teacher model
