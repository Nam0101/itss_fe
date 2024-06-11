import { configureStore } from "@reduxjs/toolkit";
import Customization from "./reducers/Customization";
import Subject from "./reducers/Subject";

export default configureStore({
  reducer: {
    Customization: Customization,
    Subject: Subject,
  },
});
