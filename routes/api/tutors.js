const router = require("express").Router();
const studentsController = require("../../controllers/tutorControllers");
const application = require('./application');

//"/api/tutor"
// ,application.IsAuthenticated in route params
router.route("/")
.get(tutorController.findAll)
.post(tutorController.create);
// Matches with "/api/tutor/:id"
router
.route("/:id")
.get(tutorController.findById)
.put(tutorController.update)
.delete(tutorController.remove);

module.exports = router;