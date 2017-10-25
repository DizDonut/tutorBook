const router = require("express").Router();
const studentRoutes = require("./students");

// Student routes
router.use("/students", studentRoutes);

module.exports = router;
