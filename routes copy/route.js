const express = require("express");
const router = express.Router();

const userRegister = require("../Controllers/userRegister");
const userLogin = require("../Controllers/userLogin");
const updateName = require("../Controllers/updateName");
const updateUserInfo = require("../Controllers/updateUserInfo");
router.get("/", (req, res) => {
  res.send("Server is Running");
});

// executed when register api is called
router.post("/register", userRegister);

// executed when login api is called
router.post("/login", userLogin);

router.post("/updatename", updateName);

router.post("/updateUserInfo", updateUserInfo);

module.exports = router;
