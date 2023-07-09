import { FC } from 'react';
import {
  AiOutlineClose,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import {
  Container,
  CloseButton,
  Section,
  PrevButton,
  NextButton,
  MainImage,
  Amount,
  PhotosContainer,
  Photo,
} from './Gallery.styled';

type Props = {
  images: string[];
  currentImage: number;
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
};

export const Gallery: FC<Props> = ({
  images,
  currentImage,
  setCurrentImage,
}) => {
  const handleClick = (index: number) => {
    setCurrentImage(index + 1);
  };

  return (
    <Container>
      <CloseButton onClick={() => setCurrentImage(0)}>
        <AiOutlineClose />
      </CloseButton>
      <Section>
        <MainImage src={images[currentImage - 1]} alt="Gallery" />
        {currentImage !== 1 && (
          <PrevButton
            onClick={() =>
              setCurrentImage((prev) => (prev - 1 === 0 ? 1 : prev - 1))
            }
          >
            <AiOutlineArrowLeft />
          </PrevButton>
        )}
        {currentImage !== images.length && (
          <NextButton
            onClick={() =>
              setCurrentImage((prev) =>
                prev + 1 === images.length + 1 ? images.length : prev + 1
              )
            }
          >
            <AiOutlineArrowRight />
          </NextButton>
        )}
      </Section>
      <Amount>{`${currentImage} / ${images.length}`}</Amount>
      <PhotosContainer>
        {images.map((image, index) => (
          <Photo
            key={index}
            src={image}
            alt={`Gallery ${index}`}
            onClick={() => handleClick(index)}
          />
        ))}
      </PhotosContainer>
    </Container>
  );
};
