import { FC } from 'react';

import {
  SignupStyled,
  SignupContent,
  Title,
  Link,
  Form,
  SignupImage,
} from './SignupDesktops.styled';
import { Input } from '../Input';
import { Button } from '../Button';
import { SignNavigation } from '../SignNavigation/SignNavigation';

export const SignupDesktops: FC = () => {
  return (
    <SignupStyled>
      <SignupContent>
        <SignNavigation />
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
      </SignupContent>
      <SignupImage></SignupImage>
    </SignupStyled>
  );
};
