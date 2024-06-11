import { createSlice } from "@reduxjs/toolkit";

const Customization = createSlice({
  name: "customization",
  initialState: {
    isOpen: 1,
    opened: true,
  },
  reducers: {
    menuOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setMenu: (state, action) => {
      state.opened = action.payload;
    },
  },
});

export const { menuOpen, setMenu } = Customization.actions;
export default Customization.reducer;
