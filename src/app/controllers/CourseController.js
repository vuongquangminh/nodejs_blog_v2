const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class SiteController {
  // [GET] / courses/:slug
  async show(req, res, next) {
    //Cach 1
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: course.toObject() });
      })
      .catch(next);

    // Cách 2
    // const course = await Course.findOne({slug: req.params.slug});
    // res.json(course)
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
