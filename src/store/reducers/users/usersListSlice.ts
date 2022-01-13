import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { usersApi } from 'store/reducers/users/usersApi';
import { User } from 'store/reducers/users/_types/User';
import { TablePagination } from 'store/types/TablePagination';

type InitialState = {
  users: User[];
} & TablePagination;

const initialState: InitialState = {
  users: [],
  page: 1,
  limit: 5,
  totalPageCount: 0,
};

const usersListSlice = createSlice({
  name: 'usersListSlice',
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<number>) => {
      console.log(action);
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      usersApi.endpoints.getUsers.matchFulfilled,
      (state, { payload }) => {
        state.users = payload.users;
        state.totalPageCount = Math.ceil(payload.totalCount / state.limit);
      }
    );
  },
});

export const { changePage } = usersListSlice.actions;
export default usersListSlice.reducer;
