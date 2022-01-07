import { configureStore } from '@reduxjs/toolkit';
import usersWithCommentsSlice from './reducers/users/usersWithCommentsSlice';
import jsonplaceholderService from './services/jsonplaceholderService';

export const store = configureStore({
  reducer: {
    usersWithCommentsSlice: usersWithCommentsSlice,
    [jsonplaceholderService.reducerPath]: jsonplaceholderService.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(jsonplaceholderService.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
