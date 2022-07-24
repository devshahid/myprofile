const userProfile = require("../models/userschema");

const getUserInfo = async (req, res) => {
  const userid = req.params.userid;
  if (!userid) {
    return res
      .status(400)
      .json({ error: "some data is missing", status: "422" });
  }
  try {
    const loginUser = await userProfile.findOne({ _id: userid });
    console.log(loginUser);
    if (!loginUser) {
      return res.json({ error: "Invalid credentials", status: "422" });
    }
    return res
      .status(200)
      .json({ message: "user info", status: "200", loginUser });
  } catch (err) {
    return res.status(500).json({ error: err, status: "500" });
  }
};

module.exports = getUserInfo;
