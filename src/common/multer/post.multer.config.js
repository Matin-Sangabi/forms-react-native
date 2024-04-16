const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { v4: uuidV4 } = require("uuid");
const { message } = require("../utils/message");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    fs.mkdirSync(path.join(process.cwd(), "public", "uploads", "posts"), {
      recursive: true,
    });

    cb(null, `public/uploads/posts`);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const whiteList = [".png", ".jpg", ".jpeg", ".webp"];
    if (whiteList.includes(ext)) {
      const fileName = uuidV4() + ext;
      return cb(null, fileName);
    }
    cb(new Error(message.filesFormatErrors));
  },
});

const _5mb = 5 * 1000 * 1000;

const postMulter = multer({ storage, limits: { fileSize: _5mb } });

module.exports = {
  postMulter,
};
