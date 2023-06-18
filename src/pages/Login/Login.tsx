/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import { Form, Link, LoginStyled, Title, LoginHeader } from './Login.styled';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { useMediaQueries } from '../../hooks/useMediaQueries';

export const Login: FC = () => {
  const { md } = useMediaQueries();

  if (md) {
    return <p>Medium screens</p>;
  }

  return (
    <LoginStyled>
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
          <Input type="password" label="Enter your password" name="password" />
          <Button type="submit">Log in</Button>
        </Form>
      </div>
    </LoginStyled>
  );
};
