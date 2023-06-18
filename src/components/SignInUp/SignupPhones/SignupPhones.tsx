import { FC } from 'react';

import { ContentPhonesStyled, Title, Link, Form } from '../CommonContent';

import { Input } from '../../Input';
import { Button } from '../../Button';
import { SignNavigation } from '../SignNavigation/SignNavigation';

export const SignupPhones: FC = () => {
  return (
    <ContentPhonesStyled>
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
    </ContentPhonesStyled>
  );
};
