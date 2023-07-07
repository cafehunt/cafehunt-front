import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../Schema/Schema';

import { Input } from '../../Input';
import { Button } from '../../Button';
import { SignNavigation } from '../SignNavigation/SignNavigation';
import {
  ContentDesktopsStyled,
  ContentWrapper,
  Title,
  LinkStyled,
  Form,
  FormContainer,
  ContentImage,
  StyledError,
} from '../CommonContent';
import { appRoutes } from '../../../routes/Routes';
import { useUserRegister } from '../../../hooks/useUserRegister';
import { Alert } from '@mui/material';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

export type FormData = {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  passwordRepeat: string;
};

export type FormRequestData = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
};

export const SignupDesktops: FC = () => {
  const [formRequestData, setFormRequestData] =
    useState<FormRequestData | null>(null);
  const [data, status] = useUserRegister(formRequestData);
  console.log('neWuser:', data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = (formData: FormData): void => {
    const { email, firstname, lastname, password } = formData;

    const formRequestData = {
      email,
      password,
      first_name: firstname,
      last_name: lastname,
    };

    setFormRequestData(formRequestData);
  };

  return (
    <ContentDesktopsStyled>
      <ContentWrapper>
        <SignNavigation />
        <div>
          <Title>Create an account</Title>
          <p>
            Already have an account?{' '}
            <Link to={appRoutes.login}>
              <LinkStyled>Log in</LinkStyled>
            </Link>
          </p>
        </div>
        <div>
          {formRequestData !== null && status === 'success' ? (
            <Alert
              icon={<IoCheckmarkCircleOutline fontSize="inherit" />}
              severity="success"
            >
              Account created
            </Alert>
          ) : (
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormContainer>
                <Input
                  type="email"
                  name="email"
                  label="Enter your email"
                  placeholder="m.brown@gmail.com"
                  register={register('email')}
                />
                {errors.email && (
                  <StyledError>{errors.email.message}</StyledError>
                )}
                <Input
                  type="text"
                  name="firstname"
                  label="Enter your firstname"
                  placeholder="Marry"
                  register={register('firstname')}
                />
                {errors.firstname && (
                  <StyledError>{errors.firstname.message}</StyledError>
                )}
                <Input
                  type="text"
                  name="lastname"
                  label="Enter your lastname"
                  placeholder="Brown"
                  register={register('lastname')}
                />
                {errors.lastname && (
                  <StyledError>{errors.lastname.message}</StyledError>
                )}
                <Input
                  type="password"
                  name="password"
                  label="Create your password (min 8 chars)"
                  register={register('password')}
                />
                <p>
                  {errors.password && (
                    <StyledError>{errors.password.message}</StyledError>
                  )}
                </p>
                <Input
                  type="password"
                  name="passwordRepeat"
                  label="Repeat your password"
                  register={register('passwordRepeat')}
                />
                <p>
                  {errors.passwordRepeat && (
                    <StyledError>{errors.passwordRepeat.message}</StyledError>
                  )}
                </p>
              </FormContainer>
              <Button type="submit">Sign up</Button>
            </Form>
          )}
        </div>
      </ContentWrapper>
      <ContentImage></ContentImage>
    </ContentDesktopsStyled>
  );
};
