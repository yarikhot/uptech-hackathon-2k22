import { LeagueTypes, User } from '@types';

export const mockData: Array<
  Omit<User, 'password' | 'isAuthorized' | 'email' | 'userName' | 'coinAmount'>
> = [
  {
    id: 1,
    name: 'Mahdi Robinson',
    imageUrl: '/testImage.jpg',
    score: 18,
    league: LeagueTypes.Low,
  },
  {
    id: 2,
    name: 'Subhan Griffith',
    imageUrl: '/testImage.jpg',
    score: 3,
    league: LeagueTypes.High,
  },
  {
    id: 3,
    name: 'Kaya Thatcher',
    imageUrl: '/testImage.jpg',
    score: 1,
    league: LeagueTypes.High,
  },
  {
    id: 4,
    name: 'Anabella Meyers',
    imageUrl: '/testImage.jpg',
    score: 67,
    league: LeagueTypes.High,
  },
  {
    id: 5,
    name: 'Ricardo Poole',
    imageUrl: '/testImage.jpg',
    score: 40,
    league: LeagueTypes.High,
  },
  {
    id: 6,
    name: 'Shiv Mcfarlane',
    imageUrl: '/testImage.jpg',
    score: 30,
    league: LeagueTypes.Medium,
  },
  {
    id: 7,
    name: 'Caoimhe Scott',
    imageUrl: '/testImage.jpg',
    score: 13,
    league: LeagueTypes.Medium,
  },
  {
    id: 8,
    name: 'Sumaya Gillespie',
    imageUrl: '/testImage.jpg',
    score: 12,
    league: LeagueTypes.Low,
  },
  {
    id: 9,
    name: 'Penny Allison',
    imageUrl: '/testImage.jpg',
    score: 10,
    league: LeagueTypes.Low,
  },
  {
    id: 10,
    name: 'Taio Lozano',
    imageUrl: '/testImage.jpg',
    score: 90,
    league: LeagueTypes.Medium,
  },
];
