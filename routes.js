const { Router } = require("express");
const { postRoutes } = require("./src/modules/Posts/post.routes");

const router = Router();

router.use("/posts", postRoutes);

module.exports = {
  allRoutes: router,
};
