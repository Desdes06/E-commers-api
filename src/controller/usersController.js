// untuk sekala kecil
const getAllUsers = (req, res) => {
  res.json({
    message: "GET all user success",
  });
};

// jika sekala besar biasanya menggunakan async
const getOneUser = async (req, res) => {
  try {
    res.json({
      status: "success",
      message: "Get on user",
      data: {
        username: "Azrian<3",
        email: "azrianawan@gmail.com",
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

module.exports = { getAllUsers, getOneUser };
