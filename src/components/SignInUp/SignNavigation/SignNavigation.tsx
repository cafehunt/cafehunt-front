import { FC } from 'react';
import { BackButton } from '../../BackButton';
import { Logo } from '../../Logo';
import { SignNavigationStyled } from './SignNavigation.styled';

export const SignNavigation: FC = () => {
  return (
    <SignNavigationStyled>
      <div>
        <Logo />
      </div>
      <BackButton />
    </SignNavigationStyled>
  );
};
