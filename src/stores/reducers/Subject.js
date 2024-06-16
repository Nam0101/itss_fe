import { createSlice } from "@reduxjs/toolkit";

const Subject = createSlice({
  name: "subject",
  initialState: {
    src: "",
    title: "",
    star: 0,
    listSubject: [],
    resultSearch: [],
    newComment: {},
  },
  reducers: {
    setSubject: (state, action) => {
      state.src = action.payload.imgUrl;
      state.title = action.payload.title;
      state.star = action.payload.rating;
    },

    setListSubject: (state, action) => {
      state.listSubject = action.payload;
    },

    setResultSearch: (state, action) => {
      state.resultSearch = action.payload;
    },
    setNewComment: (state, action) => {
      state.newComment = action.payload;
    },
  },
});

export const { setSubject, setListSubject, setResultSearch, setNewComment } =
  Subject.actions;
export default Subject.reducer;
