/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import {
  SignupStyled,
  SignupHeader,
  Title,
  Link,
  Form,
} from './SignupPhones.styled';
import { Logo } from '../Logo';
import { Input } from '../Input';
import { Button } from '../Button';

export const SignupPhones: FC = () => {
  return (
    <SignupStyled>
      <SignupHeader>
        <a href="#">
          <AiOutlineArrowLeft />
          <span>Back</span>
        </a>
        <div>
          <Logo />
        </div>
      </SignupHeader>
      <div>
        <Title>Create an account</Title>
        <p>
          Already have an account? <Link href="#">Log in</Link>
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
            type="text"
            label="Enter your name"
            name="name"
            placeholder="Marry Brown"
          />
          <Input
            type="password"
            label="Create your password (min 8 chars)"
            name="password"
          />
          <Input
            type="password"
            label="Repeat your password"
            name="password-repeat"
          />
          <Button type="submit">Sign up</Button>
        </Form>
      </div>
    </SignupStyled>
  );
};
