const userProfile = require("../models/userschema");

const addSkills = async (req, res) => {
  console.log(req.body);
  const { skillTitle, ratingStars, userid } = req.body;
  if (skillTitle == null || ratingStars == 0 || !userid) {
    return res
      .status(422)
      .json({ status: "422", error: "some data is missing" });
  }

  try {
    const userExist = await userProfile.updateOne(
      { _id: userid },
      {
        $push: { skills: { skillname: skillTitle, rating: ratingStars } },
      }
    );
    console.log(userExist);
    if (userExist) {
      res.status(201).json({ message: "skills added", statusCode: 201 });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ CatchBlock: err });
  }
};

module.exports = addSkills;
