import { FC } from 'react';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import { SignupPhones } from '../../components/SignInUp/SignupPhones';
import { SignupDesktops } from '../../components/SignInUp/SignupDesktops';

export const Signup: FC = () => {
  // const { md } = useMediaQueries();

  // if (md) {
  //   return <SignupDesktops />;
  // }

  return <SignupDesktops />;
};

// import { FC } from 'react';
// import { Link } from 'react-router-dom';

// import {
//   ContentPhonesStyled,
//   Title,
//   LinkStyled,
//   Form,
// } from '../../components/SignInUp/CommonContent';

// import { Input } from '../../components/Input';
// import { Button } from '../../components/Button';
// import { SignNavigation } from '../../components/SignInUp/SignNavigation';
// import { appRoutes } from '../../routes/Routes';

// export const Signup: FC = () => {
//   return (
//     <ContentPhonesStyled>
//       <SignNavigation />
//       <div>
//         <Title>Create an account</Title>
//         <p>
//           Already have an account?{' '}
//           <Link to={appRoutes.login}>
//             <LinkStyled>Log in</LinkStyled>
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
//           <Input
//             type="text"
//             label="Enter your name"
//             name="name"
//             placeholder="Marry Brown"
//           />
//           <Input
//             type="password"
//             label="Create your password (min 8 chars)"
//             name="password"
//           />
//           <Input
//             type="password"
//             label="Repeat your password"
//             name="password-repeat"
//           />
//           <Button type="submit">Sign up</Button>
//         </Form>
//       </div>
//     </ContentPhonesStyled>
//   );
// };
