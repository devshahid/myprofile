const express = require("express");
const router = express.Router();

const userRegister = require("../controllers/userRegister");
const userLogin = require("../controllers/userLogin");
const updateName = require("../controllers/updateName");
const updateUserInfo = require("../controllers/updateUserInfo");
const getUserInfo = require("../controllers/getUserInfo");
router.get("/", (req, res) => {
  res.send("Server is Running");
});

// executed when register api is called
router.post("/register", userRegister);

// executed when login api is called
router.post("/login", userLogin);

router.post("/updatename", updateName);

router.post("/updateUserInfo", updateUserInfo);

router.get("/getUserInfo/:userid", getUserInfo);

module.exports = router;
