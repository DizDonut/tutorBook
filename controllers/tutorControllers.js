const db = require("../models");

// Defining methods for the studentsController
module.exports = {
    register: function(req, res) {
        db.Tutor
        .findOneAndUpdate({email: req.body.email }, req.body,{upsert:true})
        // .addHash(req.body,function(err,user) {
        //   if(err) throw err;
        // })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }, 
    findAll: function(req, res) {
        db.Tutor
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findById: function(req, res) {
        db.Tutor
          .findById(req.params.id)
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
          .findOneAndUpdate({ _id: req.params.id }, req.body)
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