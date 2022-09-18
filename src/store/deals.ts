/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Deal, DealTypes } from '../types';

import { makeid } from './userDeal';

const initialState: Array<Deal> = [
  {
    id: makeid(8),
    title: 'Оплатити податки',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.money,
    imageUrl: '/pexels-polina-tankilevitch-6927534.jpg',
  },
  {
    id: makeid(8),
    title: 'Посадити дерево',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.cleaning,
    imageUrl: '/Screenshot 2022-09-17 at 17.16.09.png',
  },
  {
    id: makeid(8),
    title: 'Допомога ЗСУ (точкові запити)',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.money,
    imageUrl: '/157664-1_large.jpeg',
  },
  {
    id: makeid(8),
    title: 'Допомога притулкам (фінансово чи справами)',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.money,
    imageUrl: '/pexels-helena-lopes-1904105-scaled.webp',
  },
  {
    id: makeid(8),
    title: 'Допомога дитячим будинкам (фінансово чи справами)',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.money,
    imageUrl: '/d696fc6e-0001-0004-0000-000001404973_w1600_r1.5_fpx44_fpy50.jpg',
  },
  {
    id: makeid(8),
    title: 'Допомога дитячим будинкам (фінансово чи справами)',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.medicalHelp,
    imageUrl: '/pexels-kampus-production-7551587.jpg',
  },
  {
    id: makeid(8),
    title: 'Здати кров',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.money,
    imageUrl: '/istockphoto-1266747084-612x612.jpeg',
  },
  {
    id: makeid(8),
    title: 'Прибирання території (в складі бригади чи місцевої організації)',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.cleaning,
    imageUrl: '/istockphoto-1006632972-612x612.jpeg',
  },
  {
    id: makeid(8),
    title: 'Допомога медичним закладам (як санітар н-д)',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.medicalHelp,
    imageUrl: '/istockphoto-968995194-612x612 (1).jpeg',
  },
  {
    id: makeid(8),
    title: 'Донати в “Повернись живим”, “United24”,  “Фонд Притули” та інші фонди',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    type: DealTypes.medicalHelp,
    imageUrl: '/photo-output.jpg',
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
