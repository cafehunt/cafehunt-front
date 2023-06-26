import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ContentPhonesStyled, Title, LinkStyled, Form } from '../CommonContent';

import { Input } from '../../Input';
import { Button } from '../../Button';
import { SignNavigation } from '../SignNavigation/SignNavigation';
import { appRoutes } from '../../../routes/Routes';

export const SignupPhones: FC = () => {
  return (
    <ContentPhonesStyled>
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
    </ContentPhonesStyled>
  );
};
