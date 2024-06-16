// import { configureStore } from "@reduxjs/toolkit";
// import Customization from "./reducers/Customization";
// import Subject from "./reducers/Subject";

// export default configureStore({
//   reducer: {
//     Customization: Customization,
//     Subject: Subject,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import Customization from "./reducers/Customization";
import Subject from "./reducers/Subject";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  Customization: Customization,
  Subject: Subject,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
