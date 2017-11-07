const router = require("express").Router();
const studentsController = require("../../controllers/studentControllers");
const application = require('./application');

//Jonathan note - pretty sure all our routes will be through tutors, since we populate tutor models with students
// Matches with "/api/students"
// ,application.IsAuthenticated in route params when ready to authenticate
router.route("students/addStudent")
  .get(studentsController.findAll)
  // .post(studentsController.create);

// Matches with "/api/students/:id"
router.route("/:id")
//USE THIS ROUTE FOR CREATING NEW STUDENTS!
  .post(studentsController.create)
  .get(studentsController.findById)
  .put(studentsController.update)
  .delete(studentsController.remove);

module.exports = router;
