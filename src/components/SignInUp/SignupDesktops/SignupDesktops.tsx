import { FC } from 'react';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../Schema/Schema';

import { Input } from '../../Input';
import { Button } from '../../Button';
import { SignNavigation } from '../SignNavigation/SignNavigation';
import {
  ContentDesktopsStyled,
  ContentWrapper,
  Title,
  LinkStyled,
  Form,
  FormContainer,
  ContentImage,
} from '../CommonContent';
import { appRoutes } from '../../../routes/Routes';
import { Alert } from '@mui/material';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { RegisterFormValues } from '../../../types/RegisterFormValues.type';
import { postUser } from '../../../api/postUser';
import { Loader } from '../../Loader';

export type FormData = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  passwordRepeat: string;
};

export type FormRequestData = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
};

export const SignupDesktops: FC = () => {
  const mutation = useMutation({
    mutationFn: (newUser: RegisterFormValues) => {
      return postUser(newUser);
    },
  });

  const error = mutation.error as Error;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = (newUser: RegisterFormValues) => {
    mutation.mutate(newUser);
  };

  return (
    <ContentDesktopsStyled>
      <ContentWrapper>
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
          {mutation.isLoading ? (
            <Loader />
          ) : (
            <>
              {mutation.isError && (
                <Alert severity="error">
                  An error occured: {error.message}
                </Alert>
              )}

              {mutation.isSuccess && (
                <Alert
                  icon={<IoCheckmarkCircleOutline fontSize="inherit" />}
                  severity="success"
                >
                  Account created
                </Alert>
              )}

              {!mutation.isSuccess && (
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <FormContainer>
                    <Input
                      type="email"
                      name="email"
                      label="Enter your email"
                      placeholder="m.brown@gmail.com"
                      register={register('email')}
                      errors={errors}
                    />
                    <Input
                      type="text"
                      name="first_name"
                      label="Enter your firstname"
                      placeholder="Marry"
                      register={register('first_name')}
                      errors={errors}
                    />
                    <Input
                      type="text"
                      name="last_name"
                      label="Enter your lastname"
                      placeholder="Brown"
                      register={register('last_name')}
                      errors={errors}
                    />
                    <Input
                      type="password"
                      name="password"
                      label="Create your password (min 8 chars)"
                      register={register('password')}
                      errors={errors}
                    />
                    <Input
                      type="password"
                      name="passwordRepeat"
                      label="Repeat your password"
                      register={register('passwordRepeat')}
                      errors={errors}
                    />
                  </FormContainer>
                  <Button disabled={!isValid || isSubmitting} type="submit">
                    Sign up
                  </Button>
                </Form>
              )}
            </>
          )}
        </div>
      </ContentWrapper>
      <ContentImage></ContentImage>
    </ContentDesktopsStyled>
  );
};
