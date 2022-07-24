const userProfile = require("../models/userschema");

const updateUserInfo = async (req, res) => {
  console.log(req.body);
  const { userName, userid, contact, aboutme } = req.body;
  if (!userName || !userid || !contact || !aboutme) {
    return res
      .status(422)
      .json({ status: "422", error: "some data is missing" });
  }
  if (userName == "" || userName == "undefined") {
    return res.status(422).json({ error: "Write some name" });
  }
  try {
    const loginUser = await userProfile.findOne({ _id: userid });
    var userExist;
    if (loginUser.contact != contact) {
      userExist = await userProfile.updateOne(
        { _id: userid },
        {
          $set: { contact },
        }
      );
    }
    if (loginUser.aboutMe != aboutme) {
      userExist = await userProfile.updateOne(
        { _id: userid },
        {
          $set: { aboutMe: aboutme },
        }
      );
    }
    console.log(userExist);
    if (userExist) {
      res.status(201).json({ message: "user info updated", statusCode: 201 });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ CatchBlock: err });
  }
};

module.exports = updateUserInfo;
