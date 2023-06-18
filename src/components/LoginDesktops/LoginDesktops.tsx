/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import {
  LoginStyled,
  LoginContent,
  LoginHeader,
  Title,
  Link,
  Form,
  LoginImage,
} from './LoginDesktops.styled';
import { Logo } from '../Logo';
import { Input } from '../Input';
import { Button } from '../Button';

export const LoginDesktops: FC = () => {
  return (
    <LoginStyled>
      <LoginContent>
        <LoginHeader>
          <a href="#">
            <AiOutlineArrowLeft />
            <span>Back</span>
          </a>
          <div>
            <Logo />
          </div>
        </LoginHeader>
        <div>
          <Title>Welcome back!</Title>
          <p>
            Still don’t have an account? <Link href="#">Sign up</Link>
          </p>
        </div>
        <div>
          <Form>
            <Input
              type="email"
              label="Enter your email"
              name="email"
              placeholder="m.brown@gmail.com"
            />
            <Input
              type="password"
              label="Enter your password"
              name="password"
            />
            <Button type="submit">Log in</Button>
          </Form>
        </div>
      </LoginContent>
      <LoginImage></LoginImage>
    </LoginStyled>
  );
};
