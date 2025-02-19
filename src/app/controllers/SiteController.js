const Course = require("../models/Course");

class SiteController {
  // [GET] /
  async index(req, res, next) {
    try {
      const courses = await Course.find({});
      // res.json(courses);
      const new_courses = courses.map(course => course.toObject())
      res.render("home", { new_courses });
    } catch (error) {
      next(err);
      res.status(400).json({ error: "error!" });
    }

    // res.render("home");
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
