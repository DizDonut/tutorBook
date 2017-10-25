const router = require("express").Router();
const studentsController = require("../../controllers/studentControllers");

// Matches with "/api/students"
router.route("/")
  .get(studentsController.findAll)
  .post(studentsController.create);

// Matches with "/api/students/:id"
router
  .route("/:id")
  .get(studentsController.findById)
  .put(studentsController.update)
  .delete(studentsController.remove);

module.exports = router;