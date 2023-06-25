import { FC } from 'react';

import Grid from '@mui/material/Grid';
import { AiOutlineHeart } from 'react-icons/ai';
import { SlLocationPin } from 'react-icons/sl';

import { FlexContainer } from '../../components/FlexContainer';
import {
  CafeStyled,
  CafeHeader,
  CafeTitleWrapper,
  CafeTitle,
  Favorite,
  CafeGallery,
  CafeTitleSecondary,
  PhotoContainer,
  CafeGalleryContainer,
} from './Cafe.styled';
import { BackButton } from '../../components/BackButton';
import { Location } from '../../components/Location';
import { Schedule } from '../../components/Schedule';
import { CafeTag } from '../../components/CafeTag';
import { CafeRating } from '../../components/CafeRating';
import { Button } from '../../components/Button';

import photoImg from '../../assets/img/item-card.jpg';

export const Cafe: FC = () => {
  return (
    <CafeStyled>
      <CafeHeader>
        <nav>
          <BackButton />
        </nav>
        <CafeTitleWrapper>
          <CafeTitle>Very Well Cafe</CafeTitle>
          <Favorite>
            <AiOutlineHeart />
          </Favorite>
        </CafeTitleWrapper>
        <FlexContainer jc="space-between" ai="center">
          <FlexContainer fd="column" gap="8px">
            <Location variant="big" href="#">
              <SlLocationPin />
              <span>Velyka Vasylkivska str., Kyiv, Ukraine</span>
            </Location>
            <Schedule>$$ &#183; Open now (8 AM - 22 PM)</Schedule>
            <FlexContainer gap="8px">
              <CafeTag>Vegan menu</CafeTag>
              <CafeTag>Free WI-FI</CafeTag>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer fd="column" ai="flex-end" gap="8px">
            <CafeRating />
            <Button width="200px">Book</Button>
          </FlexContainer>
        </FlexContainer>
      </CafeHeader>
      <CafeGallery>
        <CafeTitleSecondary>Photos</CafeTitleSecondary>
        <CafeGalleryContainer>
          <PhotoContainer>
            <img src={photoImg} alt="Cafe" />
          </PhotoContainer>
          <PhotoContainer>
            <img src={photoImg} alt="Cafe" />
          </PhotoContainer>
          <PhotoContainer>
            <img src={photoImg} alt="Cafe" />
          </PhotoContainer>
          <PhotoContainer>
            <img src={photoImg} alt="Cafe" />
          </PhotoContainer>
          <PhotoContainer>
            <img src={photoImg} alt="Cafe" />
          </PhotoContainer>
        </CafeGalleryContainer>
      </CafeGallery>
    </CafeStyled>
  );
};
