import { FC } from 'react';
import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundTitle,
  NotFoundText,
} from './NotFound.styled';
import coffeEmoji from '../../assets/img/coffe-emoji.png';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { appRoutes } from '../../routes/Routes';

export const NotFound: FC = () => {
  return (
    <NotFoundContainer>
      <NotFoundImage src={coffeEmoji} />
      <NotFoundTitle>Oops! Page Not Found</NotFoundTitle>
      <NotFoundText>
        The page you are looking for does not exist. Please check the URL or go
        back to the homepage.
      </NotFoundText>
      <Link to={appRoutes.home}>
        <Button width="200px">Go Back to Homepage</Button>
      </Link>
    </NotFoundContainer>
  );
};
