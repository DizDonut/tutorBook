const db = require("../models");

// Defining methods for the studentsController
module.exports = {
    register: (req, res) => {
      const { username, password, email } = req.body
      db.Tutor
        .findOne({"email":email}, (err,tutorMatch) => {
          if (tutorMatch) {
            return res.json({
              error: `Sorry, already a user with the email: ${email}`
            })
          }
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
      db.Tutor
        .findOne({ 'username': username })
        .select("+password")
        .then((user,err) => {
          if (user) {
            passwd = user ? user.password : ''
            user.validPassword(password, passwd, done, user).then(function (isMatch) {
              if (isMatch) {
                // console.log(`user passed the compare function ${user}`)
                user.password= ""
                res.json({user,loggedIn:isMatch})
              } else {
                res.json({
                  loggedIn: false,
                  error: `Wrong pass for this user: ${password}`
                })
              }
            })
          }
        })
        .catch(err => res.status(422).json(err));
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
      const {tutorPic,contract} = req.body
      console.log(typeof(req.body))
      console.log('updating with  ' + JSON.stringify(req.body) + 'and ' + req.params.id)
      db.Tutor
        .findByIdAndUpdate({ _id: req.params.id },req.body, { new: true })
        .then(dbModel => {
          console.log(dbModel)
          res.json(dbModel)
        })
        .catch(err => {
          console.log("Tutor update error: " + err);
          res.status(422).json(err)
        });
    },
    remove: function(req, res) {
      console.log(req.params)
      db.Tutor.findById(req.body.tutorId, function (err,tutor) {
        console.log(tutor)
        tutor.students.remove(req.params.id)
        tutor.save(function(err,data) {
          if (err) {
            res.status(422).json(err)
          }
          res.json(data)
        })
      })
      // console.log(' got this far with ' + req.params.id)
      // db.Tutor.update({_id: req.body.tutorId},
      //   { $pull: { "students._id": {_id: req.params.id}}},
      // function(err, doc) {
      //   console.log(doc)
      //   if (err) {
      //     res.status(422).json(err);
      //   }
      //   res.json(doc);
      // })
        // .save(function (err,doc) {
        // res.json(doc)
    },
    addEvent: function(req, res) {
      console.log("tutorControllers Add EVent: ");
      //console.log(JSON.stringify(req.body));
      db.Tutor
      .findByIdAndUpdate({ _id: req.params.id }, { $push: {"events":req.body } })
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)
      })
      .catch(err => {
        console.log("Event update error: " + err);
        res.status(422).json(err)
      });
    }
}

//add student obj id to array of teacher's students
//populate teacher model with students array (all students)
//populate teacher model with one student (by student Obj Id)
//remove student from teacher model
//updated student information for specifict teacher model
