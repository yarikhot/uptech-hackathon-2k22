/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Deal, DealTypes } from '@types';

import { makeid } from './userDeal';

const initialState: Array<Deal> = [
  {
    id: makeid(8),
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.money,
    imageUrl: '/pexels-antoni-shkraba-7345444.jpg',
  },
  {
    id: makeid(8),
    title: 'Lizard 1',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.cleaning,
    imageUrl: '/pexels-antoni-shkraba-7345444.jpg',
  },
  {
    id: makeid(8),
    title: 'Lizard 2',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.medicalHelp,
    imageUrl: '/pexels-antoni-shkraba-7345444.jpg',
  },
  {
    id: makeid(8),
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.money,
    imageUrl: '/pexels-antoni-shkraba-7345444.jpg',
  },
  {
    id: makeid(8),
    title: 'Lizard 1',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.cleaning,
    imageUrl: '/pexels-antoni-shkraba-7345444.jpg',
  },
  {
    id: makeid(8),
    title: 'Lizard 2',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.medicalHelp,
    imageUrl: '/pexels-antoni-shkraba-7345444.jpg',
  },
  {
    id: makeid(8),
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.money,
    imageUrl: '/pexels-antoni-shkraba-7345444.jpg',
  },
  {
    id: makeid(8),
    title: 'Lizard 1',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.cleaning,
    imageUrl: '/pexels-antoni-shkraba-7345444.jpg',
  },
  {
    id: makeid(8),
    title: 'Lizard 2',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.medicalHelp,
    imageUrl: '/pexels-antoni-shkraba-7345444.jpg',
  },
];

export const dealSlice = createSlice({
  name: 'deals',
  initialState,
  reducers: {
    addDeals: (state, action: PayloadAction<Deal>) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addDeals } = dealSlice.actions;

export const dealReducers = dealSlice.reducer;
