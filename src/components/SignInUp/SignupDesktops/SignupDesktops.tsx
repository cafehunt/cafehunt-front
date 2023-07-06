import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
} from '../CommonContent';
import { appRoutes } from '../../../routes/Routes';
import styled from 'styled-components';

export const StyledError = styled.p`
  color: red;
  font-size: 13px;
`

const schema = yup.object().shape({
  email: yup.string().required().email('invalid email'),
  firstname: yup.string().required().min(4).max(60),
  lastname: yup.string().required().min(4).max(60),
  password: yup
  .string()
  .required()
  .min(8, 'password must be at least 8 characters')
  .max(30, 'password must not exceed 30 characters')
  .matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
    'password must contain at least one digit, one lowercase letter, and one uppercase letter'
  ),
  passwordRepeat: yup
  .string()
  .oneOf([yup.ref('password'), undefined], 'passwords must match')
  .required('repeat your password is a required field'),
});

type FormData = {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  passwordRepeat: string;
};

export const SignupDesktops: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    passwordRepeat: '',
  });

  const [isCreated, setIsCreated] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
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
          {isCreated ? (
            <h1>Account created</h1>
          ) : (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormContainer>
                <Input
                  type="email"
                  name="email"
                  label="Enter your email"
                  placeholder="m.brown@gmail.com"
                  register={register('email')}
                />
                {errors.email && <StyledError>{errors.email.message}</StyledError>}
                <Input
                  type="text"
                  name="firstname"
                  label="Enter your firstname"
                  placeholder="Marry"
                  register={register('firstname')}
                />
                {errors.firstname && <StyledError>{errors.firstname.message}</StyledError>}
                <Input
                  type="text"
                  name="lastname"
                  label="Enter your lastname"
                  placeholder="Marry"
                  register={register('lastname')}
                />
                {errors.lastname && <StyledError>{errors.lastname.message}</StyledError>}
                <Input
                  type="password"
                  name="password"
                  label="Create your password (min 8 chars)"
                  register={register('password')}
                />
                <p>{errors.password && <StyledError>{errors.password.message}</StyledError>}</p>
                <Input
                  type="password"
                  name="passwordRepeat"
                  label="Repeat your password"
                  register={register('passwordRepeat')}
                />
                <p>{errors.passwordRepeat && <StyledError>{errors.passwordRepeat.message}</StyledError>}</p>
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
