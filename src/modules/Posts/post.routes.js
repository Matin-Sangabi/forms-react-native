const { Router } = require("express");
const postController = require("./post.controller");
const { postMulter } = require("../../common/multer/post.multer.config");

const router = Router();

router.post(
  "/create",
  postMulter.array("images", 10),
  postController.createPost
);

module.exports = {
  postRoutes: router,
};
