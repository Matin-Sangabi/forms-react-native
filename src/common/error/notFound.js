function notFoundError(req, res, next) {
  return res.status(404).json({
    message: "not found routes",
  });
}

module.exports = notFoundError;
