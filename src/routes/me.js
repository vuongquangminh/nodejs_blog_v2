const express = require("express");
const router = express.Router();
const meController = require("../app/controllers/MeController");

router.get("/stored/courses", meController.storedCourses);
router.put("/courses/:id", meController.update);

module.exports = router;
