import * as actions from "./actionTypes";
const initialState = {
  userData: {
    userid: "",
    useremail: "",
    username: undefined,
    usercontact: undefined,
    useraboutme: undefined,
  },
  onetimeupdate: true,
  updateState: true,
};

const UpdateGlobalState = (state = initialState, action) => {
  switch (action.type) {
    case actions.USERDATA:
      return {
        ...state,
        userData: {
          ...state.userData,
          userid: action.payload.userid,
          useremail: action.payload.useremail,
          username: action.payload.username,
          usercontact: action.payload.usercontact,
          useraboutme: action.payload.useraboutme,
        },
      };
    case actions.UPDATE_USERINFO:
      return {
        ...state,
        userData: {
          ...state.userData,
          username: action.payload.username,
          usercontact: action.payload.usercontact,
          useraboutme: action.payload.useraboutme,
        },
      };
    case actions.UPDATE_ONETIMESTATE:
      return {
        ...state,
        onetimeupdate: action.payload,
      };

    case actions.UPDATE_USERDETAILS:
      return {
        ...state,
        userData: {
          ...state.userData,
          usercontact: action.payload.contact,
          useraboutme: action.payload.aboutme,
        },
      };
    case actions.UPDATE_USERNAME:
      return {
        ...state,
        userData: {
          ...state.userData,
          username: action.payload,
        },
      };

    default:
      return state;
  }
};

export default UpdateGlobalState;
