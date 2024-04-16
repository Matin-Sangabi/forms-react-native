const { Schema, model } = require("mongoose");

const postsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: { type: String, required: true },
    category: { type: String, required: true },
    descriptions: { type: String },
    images: [{ type: String, required: true }],
    //   createBy :
  },
  { timestamps: true }
);

const postModel = model("posts", postsSchema);

module.exports = {
  postModel,
};
