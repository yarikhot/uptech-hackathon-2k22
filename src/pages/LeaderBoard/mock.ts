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
    imageUrl: '/test1.png',
    score: 3,
    league: LeagueTypes.High,
  },
  {
    id: 3,
    name: 'Kaya Thatcher',
    imageUrl: '/test2.png',
    score: 1,
    league: LeagueTypes.High,
  },
  {
    id: 4,
    name: 'Anabella Meyers',
    imageUrl: '/test3.png',
    score: 67,
    league: LeagueTypes.High,
  },
  {
    id: 5,
    name: 'Ricardo Poole',
    imageUrl: '/test4.png',
    score: 40,
    league: LeagueTypes.High,
  },
  {
    id: 6,
    name: 'Shiv Mcfarlane',
    imageUrl: '/test5.png',
    score: 30,
    league: LeagueTypes.Medium,
  },
  {
    id: 7,
    name: 'Caoimhe Scott',
    imageUrl: '/test6.png',
    score: 13,
    league: LeagueTypes.Medium,
  },
  {
    id: 8,
    name: 'Sumaya Gillespie',
    imageUrl: '/test7.png',
    score: 12,
    league: LeagueTypes.Low,
  },
  {
    id: 9,
    name: 'Penny Allison',
    imageUrl: '/test8.png',
    score: 10,
    league: LeagueTypes.Low,
  },
  {
    id: 10,
    name: 'Taio Lozano',
    imageUrl: '/test9.png',
    score: 90,
    league: LeagueTypes.Medium,
  },
];
