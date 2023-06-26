import { FC } from 'react';
import { Link } from 'react-router-dom';

import {
  ContentPhonesStyled,
  Title,
  LinkStyled,
  Form,
  ResetPassword,
} from '../CommonContent';
import { Input } from '../../Input';
import { Button } from '../../Button';
import { SignNavigation } from '../SignNavigation/SignNavigation';
import { appRoutes } from '../../../routes/Routes';

export const LoginPhones: FC = () => {
  return (
    <ContentPhonesStyled>
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
    </ContentPhonesStyled>
  );
};
