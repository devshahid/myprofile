import * as actions from "./actionTypes";

export const updateWebsiteData = (userData) => ({
  type: actions.USERDATA,
  payload: {
    userid: userData.userid,
    useremail: userData.useremail,
    username: userData.username,
    usercontact: userData.usercontact,
    useraboutme: userData.useraboutme,
  },
});

export const updateUserInfo = (userData) => ({
  type: actions.UPDATE_USERINFO,
  payload: {
    username: userData.username,
    usercontact: userData.usercontact,
    useraboutme: userData.useraboutme,
  },
});

export const updateStateOneTime = (state) => ({
  type: actions.UPDATE_ONETIMESTATE,
  payload: state,
});

export const updateUserDetails = (userData) => ({
  type: actions.UPDATE_USERDETAILS,
  payload: {
    contact: userData.contact,
    aboutme: userData.aboutMe,
  },
});

export const updateUserName = (username) => ({
  type: actions.UPDATE_USERNAME,
  payload: username,
});

export const updateSkillsArr = (skills) => ({
  type: actions.UPDATE_SKILLS_ARR,
  payload: skills,
});
