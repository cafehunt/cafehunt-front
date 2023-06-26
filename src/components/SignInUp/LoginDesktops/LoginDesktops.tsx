import { FC } from 'react';
import { Link } from 'react-router-dom';

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

export const LoginDesktops: FC = () => {
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
          <Form>
            <FormContainer>
              <Input
                type="email"
                label="Enter your email"
                name="email"
                placeholder="m.brown@gmail.com"
              />
              <InputContainer>
                <Input
                  type="password"
                  label="Enter your password"
                  name="password"
                />
                <ResetPassword href="#">
                  Don’t remember your password?
                </ResetPassword>
              </InputContainer>
            </FormContainer>
            <Button type="submit">Log in</Button>
          </Form>
        </div>
      </ContentWrapper>
      <ContentImage></ContentImage>
    </ContentDesktopsStyled>
  );
};
