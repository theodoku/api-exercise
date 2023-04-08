import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../store/userClients/usersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
