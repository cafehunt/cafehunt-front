import { FC, useState } from 'react';
import { Image } from '../../types/Cafe.type';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import {
  CarouselStyled,
  Slide,
  ArrowLeft,
  ArrowRight,
  Indicators,
  Indicator,
} from './Carousel.styled';

type Props = {
  data: Image[];
};

export const Carousel: FC<Props> = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const handleNextSlide = () => {
    setSlide((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevSlide = () => {
    setSlide((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setSlide(index);
  };

  return (
    <CarouselStyled>
      {data.map((image, index) => (
        <Slide key={index} active={slide === index}>
          <img src={image.url} alt={image.url} />
        </Slide>
      ))}
      <ArrowLeft onClick={handlePrevSlide}>
        <AiOutlineArrowLeft />
      </ArrowLeft>
      <ArrowRight onClick={handleNextSlide}>
        <AiOutlineArrowRight />
      </ArrowRight>
      <Indicators>
        {data.map((_, index) => (
          <Indicator
            key={index}
            active={index === slide}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </Indicators>
    </CarouselStyled>
  );
};
