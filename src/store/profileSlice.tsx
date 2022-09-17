/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { User } from '../Types';

const initialState: User = {
  id: 0,
  userName: 'Yarikhot',
  name: '',
  email: 'yarikhot@gmail.com',
  imageUrl: '',
  password: 'Caramba2022.',
  isAuthorized: true,
  score: 200,
  coinAmount: 300,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<User>) => action.payload,
  },
});

// Action creators are generated for each case reducer function
export const { setProfile } = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
