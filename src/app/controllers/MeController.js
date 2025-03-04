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
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  // [DELETE] /course/:id
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect(303, "/me/stored/courses"))
      .catch(next);
  }

  // [GET] /me/trash/courses
  async trashCourses(req, res, next) {
    const courses = await Course.findDeleted({ });
    res.render("me/trash-courses", {
      courses: courses.map((item) => item.toObject()),
    });
  }
}

module.exports = new MeController();
