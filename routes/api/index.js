const router = require("express").Router();
const studentRoutes = require("./students");
const tutorRoutes = require("./tutors");
const authenticateRoutes = require("./authenticate");

// Student routes
router.use("/students", studentRoutes);
router.use("/tutors", tutorRoutes);
router.use("/authenticate", authenticateRoutes);

module.exports = router;
