const db = require("../models");

// Defining methods for the studentsController
module.exports = {
  findAll: function(req, res) {
    db.Student
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Student
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //USE THIS CONTROLLER TO CREATE A NEW STUDENT
  create: function(req, res) {

    // console.log(JSON.stringify(req.body.family));
    const newStudent = new db.Student(req.body)
    newStudent.save(function(error,doc) {
      if (error) {
        console.log("Error: " + error)
      }
      db.Tutor
        .findByIdAndUpdate({ _id: req.params.id }, { $push: { "students": doc._id } })
        .exec(function (err, data) {
          if (err) {
            console.log(err);
          }

          console.log(`student added:` + data);
          res.json(data);
        })
    })
    // db.Student
    //   .create(req.body)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Student
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Student
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

//save notes to student models
//remove notes
//update notes
//pop student model with all notes
  //one note