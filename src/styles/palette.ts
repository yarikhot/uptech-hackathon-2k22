import { Roles } from '@services';

export const palette = {
  primary: {
    main: '#6A5AFF',
    contrastText: '#fff',
    light: '#8274FF',
  },
  secondary: {
    main: '#797789',
  },
  text: {
    primary: '#0B0429',
    secondary: '#797789',
    disabled: '#AFADB8',
    white: '#FFFFFF',
  },
  action: {
    active: '#A1A0AC',
    hover: '#F5F6FB',
    selected: 'rgba(0, 0, 0, 0.08)',
    disabled: '#AFADB8',
    disabledBackground: '#D4D3D9',
    focus: 'rgba(0, 0, 0, 0.12)',
  },
  divider: '#E4E5F4',
  error: {
    main: '#F44336',
    contrastText: '#ffffff',
  },
  status: {
    inProgress: '#FF8A67',
    scheduled: '#4BAFA0',
    finished: '#8375DC',
    draft: '#9290A0',
  },
  statusBg: {
    inProgress: '#FF8A67',
    scheduled: '#4BAFA0',
    finished: '#8375DC',
    draft: '#F5F6FB',
  },
  success: {
    main: '#4BAFA0',
    contrastText: '#ffffff',
    light: '#6FBFB3',
  },
  backgrounds: {
    primary: '#F0EDFB',
    secondary: '#F8F8FD',
  },
  roles: {
    [Roles.Admin]: '#FF8A67',
    [Roles.Teacher]: '#9290A0',
    [Roles.Coach]: '#8375DC',
  },
};
