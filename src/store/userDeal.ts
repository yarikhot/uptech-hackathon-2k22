/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { DealTypes, UserDeal } from '../types';

const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u';

export function makeid(length: number): string {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length + 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const ramdomUserId = () => Math.floor(Math.random() * 10);

const initialState: Array<UserDeal> = [
  {
    id: makeid(8),
    type: DealTypes.Blood,
    date: '24-02-2022',
    amount: 30,
    title: 'loream ipsum',
    description,
    userId: ramdomUserId(),
  },
  {
    id: makeid(8),
    type: DealTypes.cleaning,
    date: '24-02-2022',
    amount: 30,
    title: 'loream ipsum',
    description,
    userId: ramdomUserId(),
  },
  {
    id: makeid(8),
    type: DealTypes.constructions,
    date: '24-02-2022',
    amount: 30,
    title: 'loream ipsum',
    description,
    userId: ramdomUserId(),
  },
  {
    id: makeid(8),
    type: DealTypes.medicalHelp,
    date: '24-02-2022',
    amount: 30,
    title: 'loream ipsum',
    description,
    userId: ramdomUserId(),
  },
  {
    id: makeid(8),
    type: DealTypes.money,
    date: '24-02-2022',
    amount: 30,
    title: 'loream ipsum',
    description,
    userId: ramdomUserId(),
  },
  {
    id: makeid(8),
    type: DealTypes.money,
    date: '24-02-2022',
    amount: 30,
    title: 'loream ipsum',
    description,
    userId: ramdomUserId(),
  },
  {
    id: makeid(8),
    type: DealTypes.money,
    date: '24-02-2022',
    amount: 30,
    title: 'loream ipsum',
    description,
    userId: ramdomUserId(),
  },
  {
    id: makeid(8),
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.money,
    imageUrl: '/pexels-antoni-shkraba-7345444.jpg',
    date: '24-02-2022',
    userId: ramdomUserId(),
  },
  {
    id: makeid(8),
    title: 'Lizard 1',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.cleaning,
    imageUrl: '/pexels-antoni-shkraba-7345444.jpg',
    date: '24-02-2022',
    userId: ramdomUserId(),
  },
  {
    id: makeid(8),
    title: 'Lizard 2',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.medicalHelp,
    imageUrl: '/pexels-antoni-shkraba-7345444.jpg',
    date: '24-02-2022',
    userId: ramdomUserId(),
  },
  {
    id: makeid(8),
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.money,
    imageUrl: '/pexels-antoni-shkraba-7345444.jpg',
    date: '24-02-2022',
    userId: ramdomUserId(),
  },
  {
    id: makeid(8),
    title: 'Lizard 1',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.cleaning,
    imageUrl: '/pexels-antoni-shkraba-7345444.jpg',
    date: '24-02-2022',
    userId: ramdomUserId(),
  },
  {
    id: makeid(8),
    title: 'Lizard 2',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.medicalHelp,
    imageUrl: '/pexels-antoni-shkraba-7345444.jpg',
    date: '24-02-2022',
    userId: ramdomUserId(),
  },
  {
    id: makeid(8),
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.money,
    imageUrl: '/pexels-antoni-shkraba-7345444.jpg',
    date: '24-02-2022',
    userId: ramdomUserId(),
  },
  {
    id: makeid(8),
    title: 'Lizard 1',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.cleaning,
    imageUrl: '/pexels-antoni-shkraba-7345444.jpg',
    date: '24-02-2022',
    userId: ramdomUserId(),
  },
  {
    id: makeid(8),
    title: 'Lizard 2',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.medicalHelp,
    imageUrl: '/pexels-antoni-shkraba-7345444.jpg',
    date: '24-02-2022',
    userId: ramdomUserId(),
  },
];

export const userDeal = createSlice({
  name: 'deals',
  initialState,
  reducers: {
    addUserDeal: (state, action: PayloadAction<UserDeal>) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUserDeal } = userDeal.actions;

export const userDealReducers = userDeal.reducer;
