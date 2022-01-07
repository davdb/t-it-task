import { createSlice } from '@reduxjs/toolkit';
import { commentsApi } from '../comments/commentsApi';
import { postsApi } from '../posts/postsApi';
import { usersApi } from './usersApi';
import { DEFAULT_LIMIT_OF_VISIBLE_USERS } from './_constants';
import UserWithComments from './_types/UsersWithComments';

interface InitialState {
  newUsersIds: number[];
  newPostsIds: number[];
  visibleUsers: UserWithComments[];
  users: UserWithComments[];
}

const initialState: InitialState = {
  visibleUsers: [],
  newUsersIds: [],
  newPostsIds: [],
  users: [],
};

const usersWithCommentsSlice = createSlice({
  name: 'usersWithCommentsSlice',
  initialState,
  reducers: {
    loadMoreUsers: (state) => {
      if (state.visibleUsers < state.users) {
        state.newUsersIds = [
          ...state.users
            .slice(
              state.visibleUsers.length,
              state.visibleUsers.length + DEFAULT_LIMIT_OF_VISIBLE_USERS
            )
            .map((item) => item.id),
        ];
        state.visibleUsers = [
          ...state.visibleUsers,
          ...state.users.slice(
            state.visibleUsers.length,
            state.visibleUsers.length + DEFAULT_LIMIT_OF_VISIBLE_USERS
          ),
        ];
      }
    },
  },
  extraReducers: (builder) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    builder.addMatcher(
      usersApi.endpoints.getUsers.matchFulfilled,
      (state, { payload }) => {
        state.users = payload;
        state.visibleUsers = payload.slice(0, DEFAULT_LIMIT_OF_VISIBLE_USERS);
        state.newUsersIds = [
          ...payload
            .slice(0, DEFAULT_LIMIT_OF_VISIBLE_USERS)
            .map((item) => item.id),
        ];
      }
      // eslint-disable-next-line no-sequences
    ),
      builder.addMatcher(
        postsApi.endpoints.getPostByUsersIds.matchFulfilled,
        (state, { payload }) => {
          state.visibleUsers = [
            ...state.visibleUsers.map((user) => {
              if (state.newUsersIds.includes(user.id)) {
                user.postsIds = [
                  ...payload
                    .filter((post) => post.userId === user.id)
                    .map((item) => item.id),
                ];
              }
              return user;
            }),
          ];
          state.newPostsIds = [...payload.map((post) => post.id)];
        }
      ),
      builder.addMatcher(
        commentsApi.endpoints.getCommentsByPostsIds.matchFulfilled,
        (state, { payload }) => {
          state.visibleUsers = [
            ...state.visibleUsers.map((user) => {
              if (state.newUsersIds.includes(user.id)) {
                user.comments = [
                  ...payload.filter((comment) =>
                    user.postsIds?.includes(comment.postId)
                  ),
                ];
              }
              return user;
            }),
          ];
        }
      );
  },
});

export const { loadMoreUsers } = usersWithCommentsSlice.actions;

export default usersWithCommentsSlice.reducer;
