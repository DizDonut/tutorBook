const router = require("express").Router();
const studentsController = require("../../controllers/studentControllers");
const application = require('./application');

//Jonathan note - pretty sure all our routes will be through tutors, since we populate tutor models with students
// Matches with "/api/students"
// ,application.IsAuthenticated in route params when ready to authenticate
router.route("Tutors/addStudent")
  .get(studentsController.findAll)
  .post(studentsController.create);

// Matches with "/api/students/:id"
router.route("/:id")
  .get(studentsController.findById)
  .put(studentsController.update)
  .delete(studentsController.remove);

module.exports = router;
