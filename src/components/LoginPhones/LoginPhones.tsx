import { FC } from 'react';

import {
  LoginStyled,
  Title,
  Link,
  Form,
  ResetPassword,
} from './LoginPhones.styled';
import { Input } from '../Input';
import { Button } from '../Button';
import { SignNavigation } from '../SignNavigation/SignNavigation';

export const LoginPhones: FC = () => {
  return (
    <LoginStyled>
      <SignNavigation />
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
          <ResetPassword href="#">Don’t remember your password?</ResetPassword>
          <Button type="submit">Log in</Button>
        </Form>
      </div>
    </LoginStyled>
  );
};
