import { configureStore } from '@reduxjs/toolkit';

import { profileReducer } from './profileSlice';
import { useresReducres } from './listOfUsers';
import { dealReducers } from './deals';
import { userDealReducers } from './userDeal';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    users: useresReducres,
    deals: dealReducers,
    userDeal: userDealReducers,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
