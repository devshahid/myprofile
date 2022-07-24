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
