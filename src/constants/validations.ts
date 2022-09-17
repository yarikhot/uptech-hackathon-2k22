/* eslint-disable no-useless-escape */
import * as yup from 'yup';

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}\(\)?\-“!@#%&\/,><\’:;|_~`])\S{6,99}$/;
const emailRegexp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const signUpValidation = yup
  .object({
    email: yup
      .string()
      .email('Invalid email address.')
      .required('Please enter your email address!'),
    password: yup
      .string()
      .matches(
        passwordRegex,
        'Password must be 6 chars long, must contain min 1 digit, 1 uppercase letter, 1 lowercase letter.',
      ),
  })
  .required();

export const loginValidation = yup
  .object({
    email: yup
      .string()
      .email('Invalid email address.')
      .required('Please enter your email address!'),
    password: yup.string().required('Please enter your password!'),
  })
  .required();

export const codeValidation = yup.object().shape({
  code: yup.string().required('Invalid code.'),
});

export const createWorkspaceValidation = yup.object().shape({
  name: yup.string().required('School name is required field!'),
});

export const createReviewNameValidation = yup.object().shape({
  name: yup.string().required('Name is required field!'),
  introduction: yup.string().required('Introduction is required field!'),
});

export const fillProfileValidation = yup.object().shape({
  firstName: yup
    .string()
    .typeError('First name is required field!')
    .required('First name is required field!'),
  lastName: yup
    .string()
    .typeError('Last name is required field!')
    .required('Last name is required field!'),
});

export const resetPasswordValidation = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegexp, 'Invalid email address.')
    .required('Enter email address.'),
  password: yup
    .string()
    .matches(
      passwordRegex,
      'Password must be 6 chars long, must contain min 1 digit, 1 uppercase letter, 1 lowercase letter.',
    )
    .required('Enter password.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password do not match!')
    .required('Confirm your password!'),
});

export const emailValidation = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegexp, 'Invalid email address.')
    .required('Enter email address.'),
});

export const contentAreaValidation = yup.object().shape({
  name: yup.string().required('Content area name is required field!'),
});

export const reviewParticipantsValidation = yup.object().shape({
  participants: yup.array().of(
    yup.object().shape({
      recipient: yup
        .object({})
        .typeError('Please select at list 1 reviewer!')
        .required('Please select recipient!'),
      reviewers: yup
        .array()
        .min(1, 'Please select at list 1 reviewer!')
        .required('Please select at list 1 reviewer!'),
    }),
  ),
});
