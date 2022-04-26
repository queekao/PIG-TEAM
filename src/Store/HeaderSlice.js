import {createSlice} from "@reduxjs/toolkit";
const headerState = {
  isToggleService: false,
  isToggleBurger: false,
};
const Header = createSlice({
  name: "server",
  initialState: headerState,
  reducers: {
    toggleService(state) {
      state.isToggleService = !state.isToggleService;
    },
    toggleBurger(state) {
      state.isToggleBurger = !state.isToggleBurger;
    },
    ////For closing the nav
    toggleOtherPage(state) {
      state.isToggleBurger = false;
    },
  },
});
export const toggleAction = Header.actions;
export default Header.reducer;
