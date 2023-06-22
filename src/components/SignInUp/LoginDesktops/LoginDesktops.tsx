import { FC } from 'react';

import {
  ContentDesktopsStyled,
  ContentWrapper,
  Title,
  Link,
  Form,
  FormContainer,
  InputContainer,
  ResetPassword,
  ContentImage,
} from '../CommonContent';
import { Input } from '../../Input';
import { Button } from '../../Button';
import { SignNavigation } from '../SignNavigation/SignNavigation';

export const LoginDesktops: FC = () => {
  return (
    <ContentDesktopsStyled>
      <ContentWrapper>
        <SignNavigation />
        <div>
          <Title>Welcome back!</Title>
          <p>
            Still don’t have an account? <Link href="#">Sign up</Link>
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