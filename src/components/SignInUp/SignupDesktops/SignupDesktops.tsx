import { FC } from 'react';

import { Input } from '../../Input';
import { Button } from '../../Button';
import { SignNavigation } from '../SignNavigation/SignNavigation';
import {
  ContentDesktopsStyled,
  ContentWrapper,
  Title,
  Link,
  Form,
  FormContainer,
  ContentImage,
} from '../CommonContent';

export const SignupDesktops: FC = () => {
  return (
    <ContentDesktopsStyled>
      <ContentWrapper>
        <SignNavigation />
        <div>
          <Title>Create an account</Title>
          <p>
            Already have an account? <Link href="#">Log in</Link>
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
            </FormContainer>
            <Button type="submit">Sign up</Button>
          </Form>
        </div>
      </ContentWrapper>
      <ContentImage></ContentImage>
    </ContentDesktopsStyled>
  );
};
