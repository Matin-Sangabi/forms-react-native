const autobind = require("auto-bind");
const postService = require("./post.service");
class PostControll {
  #service;
  constructor() {
    autobind(this);
    this.#service = postService;
  }

  async createPost(req, res, next) {
    try {
      const files = req.files;
      const body = req.body;
      const data = await this.#service.createPost(files, body);
      return res.json(data);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PostControll();
