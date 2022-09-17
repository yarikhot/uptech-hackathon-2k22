/* eslint-disable @typescript-eslint/no-explicit-any */
import { palette } from '@styles/palette';
import { Auth } from 'aws-amplify';

export const getToken = async () => {
  const authenticatedUser = await Auth.currentAuthenticatedUser();
  const userToken = authenticatedUser.signInUserSession.idToken.jwtToken;
  return userToken;
};

export const queryFormatted = (query: Record<string, any>): string => {
  if (!query) return '';

  return Object.entries(query).reduce(
    (result, [key, value], i) =>
      value ? `${result}${i === 0 ? '' : '&'}${key}=${encodeURIComponent(value)}` : result,
    '?',
  );
};

export const capitalize = (str: string): string => {
  if (!str) return '';

  return str.toLowerCase().charAt(0).toUpperCase() + str.toLowerCase().slice(1);
};

export const validateEmail = (email: string) =>
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );

export const getFullName = ({
  firstName = '',
  lastName = '',
}: {
  firstName: unknown;
  lastName: unknown;
}) => `${firstName || ''} ${lastName || ''}`.trim();

export const stringAvatar = (name: string) =>
  typeof name === 'string'
    ? {
        children: name?.includes(' ')
          ? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
          : name[0]?.toUpperCase(),
      }
    : '';

export const getStepperColor = (index: number, currentStep: number) => {
  if (currentStep === index) return palette.primary.main;
  if (currentStep > index) return palette.success.main;

  return palette.text.disabled;
};
