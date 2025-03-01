const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
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
  [POST] /course/store

  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((err) => {});
  }

  //[GET] /courses/:id/edit
  async edit(req, res, next) {
    const course = await Course.findOne({ _id: req.params.id });
    res.render("courses/edit", { course: course.toObject() });
  }
}

module.exports = new CourseController();


