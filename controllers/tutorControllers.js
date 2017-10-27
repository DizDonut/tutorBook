const db = require("../models");

// Defining methods for the studentsController
module.exports = {
    register: function(req, res) {
        //this route is submitted after registration button clicked
        db.Tutor.findOne({email: req.body.email}).then(function (user){
        //     //if this user isn't in the db (checking email), create it
            if(!user) {
                db.Tutor.update(req.body,{upsert:true}).then(function(dbTutor,err){
                    //redirect to the sign-in page once successfully added to db
                    if (err) {
                        console.log(err);
                    }
                    //can also res.json('dbTutor')
                    res.json(dbTutor);
                });
            } else {
                console.log('tutor already exists ');
                //need to send err saying they already are signed up
                res.redirect('/signup')
            }
        })
        // res.redirect('/')
    }
}