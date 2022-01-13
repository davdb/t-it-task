import { configureStore } from '@reduxjs/toolkit';

import jsonplaceholderService from 'store/services/jsonplaceholderService';
import usersListSlice from 'store/reducers/users/usersListSlice';
import commentsListSlice from 'store/reducers/comments/commentsListSlice';

export const store = configureStore({
  reducer: {
    usersListSlice: usersListSlice,
    commentsListSlice: commentsListSlice,
    [jsonplaceholderService.reducerPath]: jsonplaceholderService.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(jsonplaceholderService.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
