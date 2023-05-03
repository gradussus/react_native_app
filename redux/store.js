import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./Auth/authSlice";

// const rootReducer = combineReducers({
//   [authSlice.name]: authSlice.reducer,
// });

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
