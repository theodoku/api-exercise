import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsersStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getUsersSuccess(state, action) {
      state.isLoading = false;
      state.users = action.payload;
    },
    getUsersFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getUsersStart, getUsersSuccess, getUsersFailure } = usersSlice.actions;

export const getUsers = () => async (dispatch) => {
  try {
    dispatch(getUsersStart());
    const response = await axios.get("https://randomuser.me/api/?results=10");
    dispatch(getUsersSuccess(response.data.results));
  } catch (error) {
    dispatch(getUsersFailure(error.message));
  }
};

export default usersSlice.reducer;
