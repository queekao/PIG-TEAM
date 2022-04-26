import {createSlice} from "@reduxjs/toolkit";
const userState = {
  userData: {
    email: "",
    password: "",
    name: "",
    token: "",
    isLoggedIn: false,
  },
  isSignUpMode: false,
  isSubmit: {loading: false, success: false},
  error: "",
};
const logInSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    isToggleSignUp(state) {
      state.isSignUpMode = !state.isSignUpMode;
    },
    signUpData(state, action) {
      state.userData = {
        email: action.payload.email,
        password: action.payload.password,
        name: action.payload.name,
      };
    },
    isSubmitNow(state, action) {
      state.isSubmit.loading = action.payload.loading;
    },
    isSubmitSuccess(state, action) {
      state.isSubmit.success = action.payload.success;
    },
    Error(state, action) {
      state.error = action.payload.message;
    },
    // This two 'fn' for userData logIn or out
    logInHandler(state, action) {
      state.userData.token = action.payload.token;
      state.userData.isLoggedIn = !!state.userData.token;
    },
    logOutHandler(state) {
      state.userData.token = null;
      state.userData.isLoggedIn = !!state.userData.token;
    },
  },
});
export const LogInAction = logInSlice.actions;
export default logInSlice.reducer;
