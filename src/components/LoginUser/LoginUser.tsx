import { FC } from 'react';
import { RxAvatar } from 'react-icons/rx';
import {
  LiginUserStyled,
  LoginUserIcon,
  LoginUserName,
} from './LoginUser.styled';

type Props = {
  firstName: string;
  lastName: string;
};

export const LoginUser: FC<Props> = ({ firstName, lastName }) => {
  return (
    <LiginUserStyled>
      <LoginUserIcon>
        <RxAvatar />
      </LoginUserIcon>
      <LoginUserName>
        {firstName} {lastName}
      </LoginUserName>
    </LiginUserStyled>
  );
};
