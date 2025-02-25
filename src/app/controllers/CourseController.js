const Course = require("../models/Course");
const {mutipleMongooseToObject} = require('../../util/mongoose')

class SiteController {
  // [GET] / courses/:slug
  show(req, res, next) {
    try {
      // req.query.slug
      console.log('course detail - ' + req.params.slug)
      res.send('123')
    } catch (error) {
      next(err);
      res.status(400).json({ error: "error!" });
    }

    // res.send('123')
    // res.render("home");
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
