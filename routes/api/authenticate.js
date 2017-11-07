
const router = require("express").Router();
const express = require("express");
// const app = express();
const passport = require('passport');
const application = require('./application');
const tutorControllers = require("../../controllers/tutorControllers");


//if login route successfully authenticates, then redirect to the homepage for this user
router.route("/login") //application.IsAuthenticated,
    .post(tutorControllers.login);
//on the join page, should be the route to register a new tutor
router.route('/register')
    .post(tutorControllers.register);
//exit the app; liekly needs to be moved to react router dom
router.get('/logout', application.destroySession)
//should be the route to the join page. likely needs to be moved to react router dom
// router.get('/join', function(req,res) {
//     res.render("join")
// })


module.exports = router;