const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  contact: {
    type: Number,
  },
  aboutMe: {
    type: String,
  },
  skills: [
    {
      skillname: {
        type: String,
      },
      rating: {
        type: Number,
      },
    },
  ],
});

const userProfile = mongoose.model("userprofile", userSchema);

module.exports = userProfile;
