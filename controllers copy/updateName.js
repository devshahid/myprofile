const userProfile = require("../models/userschema");

const updateName = async (req, res) => {
  console.log(req.body);
  const { userName, userid } = req.body;
  if (!userName || !userid) {
    return res
      .status(422)
      .json({ status: "422", error: "some data is missing" });
  }
  if (userName == "" || userName == "undefined") {
    return res.status(422).json({ error: "Write some name" });
  }
  try {
    const userExist = await userProfile.updateOne(
      { _id: userid },
      {
        $set: {
          name: userName,
        },
      }
    );
    console.log(userExist);
    if (userExist) {
      res.status(201).json({ message: "username updated", statusCode: 201 });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ CatchBlock: err });
  }
};

module.exports = updateName;
