const router = require("express").Router();
const studentRoutes = require("./students");
const authenticateRoutes = require("./authenticate");

// Student routes
router.use("/students", studentRoutes);
router.use("/authenticate", authenticateRoutes);

module.exports = router;
