/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { LeagueTypes, User } from '../types';

const initialState: Array<User> = [
  {
    id: 0,
    userName: 'Yarikhot',
    name: 'Subhan Griffith',
    email: 'yarikhot@gmail.com',
    imageUrl: '/testImage.jpg',
    password: 'Caramba2022.',
    isAuthorized: true,
    score: 18,
    coinAmount: 300,
    league: LeagueTypes.Low,
  },
  {
    id: 1,
    userName: 'DonagQuipu',
    name: 'Mahdi Robinson',
    email: 'yarikhot@gmail.com',
    imageUrl: '/test1.png',
    password: 'Caramba2022.',
    isAuthorized: true,
    score: 3,
    coinAmount: 300,
    league: LeagueTypes.High,
  },
  {
    id: 2,
    userName: 'Mami04Bumf',
    name: 'Kaya Thatcher',
    email: 'yarikhot@gmail.com',
    imageUrl: '/test2.png',
    password: 'Caramba2022.',
    isAuthorized: true,
    score: 200,
    coinAmount: 300,
    league: LeagueTypes.High,
  },
  {
    id: 3,
    userName: 'Piccadilly',
    name: 'Anabella Meyers',
    email: 'yarikhot@gmail.com',
    imageUrl: '/test3.png',
    password: 'Caramba2022.',
    isAuthorized: true,
    score: 67,
    coinAmount: 300,
    league: LeagueTypes.High,
  },
  {
    id: 4,
    userName: 'Coemption',
    name: 'Anabella Meyers',
    email: 'yarikhot@gmail.com',
    imageUrl: '/test3.png',
    password: 'Caramba2022.',
    isAuthorized: true,
    score: 67,
    coinAmount: 300,
    league: LeagueTypes.High,
  },
  {
    id: 5,
    userName: 'Skedaddle',
    name: 'Ricardo Poole',
    email: 'yarikhot@gmail.com',
    imageUrl: '/test4.png',
    password: 'Caramba2022.',
    isAuthorized: true,
    score: 40,
    coinAmount: 300,
  },
  {
    id: 6,
    userName: 'Mondain',
    name: 'Shiv Mcfarlane',
    email: 'yarikhot@gmail.com',
    imageUrl: '/test5.png',
    password: 'Caramba2022.',
    isAuthorized: true,
    score: 30,
    coinAmount: 300,
    league: LeagueTypes.Medium,
  },
  {
    id: 7,
    userName: 'Bywoner',
    name: 'Caoimhe Scott',
    email: 'yarikhot@gmail.com',
    imageUrl: '/test6.png',
    password: 'Caramba2022.',
    isAuthorized: true,
    score: 13,
    coinAmount: 300,
    league: LeagueTypes.Medium,
  },
  {
    id: 8,
    userName: 'Monkey',
    name: 'Sumaya Gillespie',
    email: 'yarikhot@gmail.com',
    imageUrl: '/test7.png',
    password: 'Caramba2022.',
    isAuthorized: true,
    score: 12,
    coinAmount: 300,
    league: LeagueTypes.Low,
  },
  {
    id: 9,
    userName: 'Pseudodox',
    name: 'Penny Allison',
    email: 'yarikhot@gmail.com',
    imageUrl: '/test8.png',
    password: 'Caramba2022.',
    isAuthorized: true,
    score: 10,
    coinAmount: 300,
    league: LeagueTypes.Low,
  },
  {
    id: 10,
    userName: 'Kahuna',
    name: 'Taio Lozano',
    email: 'yarikhot@gmail.com',
    imageUrl: '/test9.png',
    password: 'Caramba2022.',
    isAuthorized: true,
    score: 90,
    coinAmount: 300,
    league: LeagueTypes.Medium,
  },
];

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser } = usersSlice.actions;

export const useresReducres = usersSlice.reducer;
