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
  // [POST] /course/store

  store(req, res, next) {
    req.body.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect("/me/stored/courses"))
      .catch((err) => {});
  }

  //[GET] /courses/:id/edit
  async edit(req, res, next) {
    const course = await Course.findOne({ _id: req.params.id });
    res.render("courses/edit", { course: course.toObject() });
  }

  // [PATCH]  /courses/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  // [DELETE] /courses/:id/force
  forceDestroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect(303, "/me/stored/courses"))
      .catch(next);
  }
}

module.exports = new CourseController();
