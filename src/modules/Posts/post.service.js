const autobind = require("auto-bind");
const { postModel } = require("./models/posts.model");
require("dotenv").config();

class PostService {
  #model;
  #baseUrl;
  constructor() {
    autobind(this);
    this.#model = postModel;
    this.#baseUrl = process.env.BASE_URL;
  }

  async createPost(files, data) {
    const imagesUrl = files.map((item) => {
      const file = this.imageUrls(item);
      return file;
    });

    await this.#model.create({ ...data, images: imagesUrl });
    return await this.getAllPosts();
  }

  async getAllPosts() {
    return await this.#model.find().lean();
  }

  imageUrls(file) {
    const filePath = file
      ? file.path.replace(/\\/g, "/").substring("public".length)
      : null;
    const file_url = file ? `${this.#baseUrl}${filePath}` : null;
    return file_url;
  }
}

module.exports = new PostService();
