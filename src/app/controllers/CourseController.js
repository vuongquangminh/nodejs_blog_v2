const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class SiteController {
  // [GET] / courses/:slug
  async show(req, res, next) {
    //Cach 1
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);

    // Cách 2
    // const course = await Course.findOne({slug: req.params.slug});
    // res.json(course)
  }

  // [GET] /course/create
  create(req, res) {
    res.render("courses/create");
  }
  // [POST] /course/store
  // async store(req, res, next) {
  //   await Course.create(req.body);
  // }

  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((err) => {});
  }
}

module.exports = new SiteController();
