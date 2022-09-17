import { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link, PasswordField, TextField } from '@atoms';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { signUpValidation, ROUTES } from '@constants';
import { SignupContainer } from '@templates';

interface FormData {
  email: string;
  password: string;
  code: string;
}

export const Signup: FC = () => {
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(signUpValidation),
    defaultValues: { email: '', password: '', code: '' },
  });

  const onSubmit = () => navigate('app');

  return (
    <SignupContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Yor email address"
          placeholder="Enter your corporate email"
          name="email"
          control={control}
        />
        <Box mt="16px">
          <PasswordField
            control={control}
            placeholder="Password 6+ characters"
            label="Password"
            name="password"
            helperText="6 chars min, at least 1 number, 1 uppercase letter, 1 lowercase letter."
          />
        </Box>
        <Button variant="contained" sx={{ mt: '32px', mb: '16px' }} fullWidth type="submit">
          Sign Up
        </Button>
        <Box display="flex" mt="24px" justifyContent="center">
          <Typography variant="body2" mr="2px">
            Already have an account?
          </Typography>
          <Link to={`/${ROUTES.Login}`}>Log In</Link>
        </Box>
      </form>
    </SignupContainer>
  );
};
