const express = require("express");
const cors = require("cors");
const dotEnv = require("dotenv");
const notFoundError = require("./src/common/error/notFound");
const errorHandler = require("./src/common/error/errorHandler");
const { allRoutes } = require("./routes");
require("./src/config/mongo.config");

function App() {
  const app = express();
  dotEnv.config();

  const corsOptions = {
    origin: true,
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  };

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.use(cors(corsOptions));
  app.use(allRoutes);
  //   error handler
  app.use(notFoundError);
  app.use(errorHandler);

  // listen
  app.listen(process.env.PORT, () => {
    console.log("App run on Port", process.env.PORT);
  });
}

App();
