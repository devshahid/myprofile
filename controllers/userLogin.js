const userProfile = require("../models/userschema");

const userLogin = async (req, res) => {
  const { useremail, userpass } = req.body;

  if (!useremail || !userpass) {
    return res
      .status(400)
      .json({ error: "some data is missing", status: "422" });
  }
  try {
    const loginUser = await userProfile.findOne({ email: useremail });
    if (!loginUser) {
      return res.json({ error: "Invalid credentials", status: "422" });
    }
    if (userpass !== loginUser.password) {
      return res.json({ error: "Invalid credentials", status: "422" });
    }
    let userData = {
      userid: loginUser._id,
      useremail: loginUser.email,
      username: loginUser.name,
      usercity: loginUser.city,
      usercountry: loginUser.country,
      usercontact: loginUser.contact,
      useraboutme: loginUser.aboutMe,
    };
    return res
      .status(200)
      .json({ message: "Welcome user", status: "200", userData, loginUser });
  } catch (err) {
    return res.status(500).json({ error: err, status: "500" });
  }
};

module.exports = userLogin;
