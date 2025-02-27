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
  async update(req, res, next) {
    try {
      const course = await Course.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        {
          new: true,
        }
      );

      if (course) {
        return res.redirect("/me/stored/courses");
      }

      res.status(404).send("Course not found");
    } catch (error) {
      next(error); // Chuyển lỗi cho middleware xử lý lỗi
    }
  }
}

module.exports = new MeController();
