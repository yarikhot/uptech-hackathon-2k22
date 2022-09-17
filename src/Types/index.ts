export interface User {
  id: number;
  userName: string;
  name: string;
  email: string;
  imageUrl: string;
  password: string;
  isAuthorized: boolean;
  league: LeagueTypes;
  score: number;
  coinAmount: number;
}

export enum LeagueTypes {
  Low = 'Нижча',
  Medium = 'Середня',
  High = 'Вища',
}

export interface Deal {
  id: number;
  transactionId?: number;
  title: string;
  description: string;
  amount?: number;
  type: DealTypes;
  imageUrl: string;
}

export type DealList = Deal[];

export enum DealTypes {
  Blood = 'Кров',
  constructions = 'Будівництво',
  money = 'Гроші',
  cleaning = 'Прибирання',
  medicalHelp = 'Медична допомога',
}

export type ProductList = Product[];

export interface Product {
  id: number;
  coinAmount: number;
  imageUrl: string;
  title: string;
  description: string;
}