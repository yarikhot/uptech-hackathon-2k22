import { FC } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { TextField, PasswordField, Link } from '@atoms';
import { loginValidation, ROUTES } from '@constants';
import { AuthTemplate } from '@templates';

interface FormData {
  email: string;
  password: string;
}

export const Login: FC = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(loginValidation),
  });

  const onSubmit = () => navigate('/');

  return (
    <AuthTemplate>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        display="flex"
        component="form"
        flexDirection="column"
        alignItems="center"
        width="440px"
      >
        <TextField
          label="Your email address"
          placeholder="Enter your email address"
          name="email"
          control={control}
        />
        <Box mt="16px" width="100%">
          <PasswordField
            control={control}
            placeholder="Password 6+ characters"
            label="Password"
            name="password"
          />
        </Box>
        <Button variant="contained" sx={{ mb: '16px', minHeight: '51px' }} fullWidth type="submit">
          Log In to UR
        </Button>
        <Box display="flex" mt="24px" mb="100px" justifyContent="center">
          <Typography variant="body2" mr="2px">
            Don&apos;t have an account?
          </Typography>
          <Link to={`/${ROUTES.Signup}`}>Sign up</Link>
        </Box>
      </Box>
    </AuthTemplate>
  );
};
