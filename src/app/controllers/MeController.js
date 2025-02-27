const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class MeController {
  // [POST] /me/stored/courses
  async storedCourses(req, res) {
    const courses = await Course.find({});
    res.render("me/stored-courses", {
      courses: courses.map((item) => item.toObject()),
    });
  }
}

module.exports = new MeController();
