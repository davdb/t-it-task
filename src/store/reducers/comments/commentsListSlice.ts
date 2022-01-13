import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { commentsApi } from 'store/reducers/comments/commentsApi';
import { Comment } from 'store/reducers/comments/_types/Comment';
import { TablePagination } from 'store/types/TablePagination';

type InitialState = {
  comments: Comment[];
} & TablePagination;

const initialState: InitialState = {
  comments: [],
  page: 1,
  limit: 8,
  totalPageCount: 0,
};

const commentsListSlice = createSlice({
  name: 'commentsListSlice',
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<number>) => {
      console.log(action);
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      commentsApi.endpoints.getComments.matchFulfilled,
      (state, { payload }) => {
        state.comments = payload.comments;
        state.totalPageCount = Math.ceil(payload.totalCount / state.limit);
      }
    );
  },
});

export const { changePage } = commentsListSlice.actions;
export default commentsListSlice.reducer;
