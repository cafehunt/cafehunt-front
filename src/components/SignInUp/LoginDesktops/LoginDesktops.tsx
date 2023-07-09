/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC } from 'react';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '../../../schemas/Login.schema';

import { Alert } from '@mui/material';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

import {
  ContentDesktopsStyled,
  ContentWrapper,
  Title,
  LinkStyled,
  Form,
  FormContainer,
  InputContainer,
  ResetPassword,
  ContentImage,
} from '../CommonContent';
import { Input } from '../../Input';
import { Button } from '../../Button';
import { SignNavigation } from '../SignNavigation/SignNavigation';
import { appRoutes } from '../../../routes/Routes';
import { LoginFormValues } from '../../../types/LoginFormValues.type';
import { loginUser } from '../../../api/loginUser';
import { Loader } from '../../Loader';

export const LoginDesktops: FC = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (userData: LoginFormValues) => {
      return loginUser(userData);
    },
  });

  const error = mutation.error as Error;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(LoginSchema),
    mode: 'onBlur',
  });

  const onSubmit = (userData: LoginFormValues) => {
    mutation.mutate(userData);

    // await queryClient.invalidateQueries(['user', mutationResult.access_token]);
    // await queryClient.refetchQueries(['user', mutationResult.access_token]);
  };

  if (mutation.isSuccess) {
    localStorage.setItem('accessToken', mutation.data.access_token);

    navigate(appRoutes.home);
  }

  return (
    <ContentDesktopsStyled>
      <ContentWrapper>
        <SignNavigation />
        <div>
          <Title>Welcome back!</Title>
          <p>
            Still don’t have an account?{' '}
            <Link to={appRoutes.register}>
              <LinkStyled>Sign up</LinkStyled>
            </Link>
          </p>
        </div>
        <div>
          {mutation.isLoading ? (
            <Loader />
          ) : (
            <>
              {mutation.isError && (
                <Alert severity="error">
                  An error occured: {error.message}
                </Alert>
              )}

              {mutation.isSuccess && (
                <Alert
                  icon={<IoCheckmarkCircleOutline fontSize="inherit" />}
                  severity="success"
                >
                  Logged in successfully
                </Alert>
              )}

              {!mutation.isSuccess && (
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <FormContainer>
                    <Input
                      type="email"
                      label="Enter your email"
                      name="username"
                      placeholder="m.brown@gmail.com"
                      register={register('username')}
                      errors={errors}
                    />
                    <InputContainer>
                      <Input
                        type="password"
                        label="Enter your password"
                        name="password"
                        register={register('password')}
                        errors={errors}
                      />
                      <ResetPassword href="#">
                        Don’t remember your password?
                      </ResetPassword>
                    </InputContainer>
                  </FormContainer>
                  <Button disabled={!isValid || isSubmitting} type="submit">
                    Log in
                  </Button>
                </Form>
              )}
            </>
          )}
        </div>
      </ContentWrapper>
      <ContentImage></ContentImage>
    </ContentDesktopsStyled>
  );
};
