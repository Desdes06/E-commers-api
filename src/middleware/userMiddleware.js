const userMiddleware = (req, res, next) => {
  console.log("terjadi api ke", req.path);
  next();
};

const isRegistered = (req, res, next) => {
  try {
    // contoh kondisi
    if (!true) {
      res.status(401).json({
        status: "failed",
        message: "Not registered",
      });
    }
    next();
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

// lebih baik menggunakan object
module.exports = {
  userMiddleware,
  isRegistered,
};
