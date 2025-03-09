const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/CourseController");

router.get('/create', courseController.create)
router.post('/store', courseController.store)
router.get('/:id/edit', courseController.edit)
router.get("/:slug", courseController.show);
router.patch("/:id/restore", courseController.restore);
router.delete("/:id/force", courseController.forceDestroy); 



module.exports = router;
