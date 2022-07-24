import rootReducer from "./mainReducer";
import { createStore } from "redux";

const store = createStore(rootReducer);

export default store;
