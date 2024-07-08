import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    console.log("getDefaultMiddleware", getDefaultMiddleware);
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default store;
