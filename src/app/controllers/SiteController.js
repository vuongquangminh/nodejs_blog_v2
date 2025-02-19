const Course = require("../models/Course");
const {mutipleMongooseToObject} = require('../../util/mongoose')
class SiteController {
  // [GET] /
  async index(req, res, next) {
    try {
      const courses = await Course.find({});
      // res.json(courses);

      res.render("home", { courses: mutipleMongooseToObject(courses) });
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
