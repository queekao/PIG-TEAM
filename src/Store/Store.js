import {configureStore} from "@reduxjs/toolkit";
import serverReducer from "./HeaderSlice";
import LogInReducer from "./LogInSlice";
const store = configureStore({
  reducer: {
    toggleHeader: serverReducer,
    logIn: LogInReducer,
  },
});
export default store;
