import * as actions from "./actionTypes";
const initialState = {
  userData: {
    userid: "",
    useremail: "",
    username: "",
    usercontact: "",
    useraboutme: "",
  },
};

const UpdateGlobalState = (state = initialState, action) => {
  switch (action.type) {
    case actions.USERDATA:
      console.log(action.payload);
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

    default:
      return state;
  }
};

export default UpdateGlobalState;
