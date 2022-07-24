const userProfile = require("../models/userschema");

const userRegister = async (req, res) => {
  console.log(req.body);
  const { useremail, userpass, confirmpass } = req.body;
  if (!useremail || !userpass || !confirmpass) {
    return res
      .status(422)
      .json({ status: "422", error: "some data is missing" });
  }
  if (userpass != confirmpass) {
    return res.status(422).json({ error: "Password should be match" });
  }
  try {
    const userExist = await userProfile.findOne({ email: useremail });
    console.log(userExist);
    if (userExist) {
      console.log("User Already Exist");
      return res.json({ error: "Email already exists" });
    }
    const user = new userProfile({
      email: useremail,
      password: userpass,
    });

    const registerUser = await user.save();

    if (registerUser) {
      res.status(201).json({ message: "user created", statusCode: 201 });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ CatchBlock: err });
  }
};

module.exports = userRegister;
