import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
