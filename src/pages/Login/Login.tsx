/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';

import { useMediaQueries } from '../../hooks/useMediaQueries';
import { LoginPhones } from '../../components/SignInUp/LoginPhones';
import { LoginDesktops } from '../../components/SignInUp/LoginDesktops';

export const Login: FC = () => {
  // const { md } = useMediaQueries();

  // if (md) {
  //   return <LoginDesktops />;
  // }

  return <LoginDesktops />;
};

// import { FC } from 'react';
// import { Link } from 'react-router-dom';

// import {
//   ContentPhonesStyled,
//   Title,
//   LinkStyled,
//   Form,
//   ResetPassword,
// } from '../../components/SignInUp/CommonContent';
// import { Input } from '../../components/Input';
// import { Button } from '../../components/Button';
// import { SignNavigation } from '../../components/SignInUp/SignNavigation';
// import { PasswordContainer } from './Login.styled';
// import { appRoutes } from '../../routes/Routes';

// export const Login: FC = () => {
//   return (
//     <ContentPhonesStyled>
//       <SignNavigation />
//       <div>
//         <Title>Welcome back!</Title>
//         <p>
//           Still don’t have an account?{' '}
//           <Link to={appRoutes.register}>
//             <LinkStyled>Sign up</LinkStyled>
//           </Link>
//         </p>
//       </div>
//       <div>
//         <Form>
//           <Input
//             type="email"
//             label="Enter your email"
//             name="email"
//             placeholder="m.brown@gmail.com"
//           />
//           <PasswordContainer>
//             <Input
//               type="password"
//               label="Enter your password"
//               name="password"
//             />
//             <ResetPassword href="#">
//               Don’t remember your password?
//             </ResetPassword>
//           </PasswordContainer>
//           <Button type="submit">Log in</Button>
//         </Form>
//       </div>
//     </ContentPhonesStyled>
//   );
// };
