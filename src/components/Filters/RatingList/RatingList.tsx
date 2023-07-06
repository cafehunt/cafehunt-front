import {
  FC,
  forwardRef,
  useRef,
  useCallback,
  useImperativeHandle,
} from 'react';
import {
  RatingListStyled,
  RatingListTitle,
  RatingListWrapper,
  RatingListItem,
  RatingInput,
  RatingLabel,
} from './RatingList.styled';
import { AiFillStar } from 'react-icons/ai';

type Props = {
  name: string;
};

type InputRef = {
  getValue: () => void;
  setValue: (value: boolean) => void;
  clearValue: () => void;
};

export const RatingList = forwardRef<InputRef, Props>(({ name }, ref) => {
  const oneStarRef = useRef<HTMLInputElement>(null);
  const twoStarRef = useRef<HTMLInputElement>(null);
  const threeStarRef = useRef<HTMLInputElement>(null);
  const fourStarRef = useRef<HTMLInputElement>(null);
  const fiveStarRef = useRef<HTMLInputElement>(null);

  const getValue = useCallback(() => {
    if (oneStarRef.current?.checked) {
      return 1;
    } else if (twoStarRef.current?.checked) {
      return 2;
    } else if (threeStarRef.current?.checked) {
      return 3;
    } else if (fourStarRef.current?.checked) {
      return 4;
    } else if (fiveStarRef.current?.checked) {
      return 5;
    }
  }, []);

  const setValue = useCallback((value: boolean) => {
    if (
      oneStarRef.current &&
      twoStarRef.current &&
      threeStarRef.current &&
      fourStarRef.current &&
      fiveStarRef.current
    ) {
      oneStarRef.current.checked = value;
      twoStarRef.current.checked = value;
      threeStarRef.current.checked = value;
      fourStarRef.current.checked = value;
      fiveStarRef.current.checked = value;
    }
  }, []);

  const clearValue = useCallback(() => {
    if (
      oneStarRef.current &&
      twoStarRef.current &&
      threeStarRef.current &&
      fourStarRef.current &&
      fiveStarRef.current
    ) {
      oneStarRef.current.checked = false;
      twoStarRef.current.checked = false;
      threeStarRef.current.checked = false;
      fourStarRef.current.checked = false;
      fiveStarRef.current.checked = false;
    }
  }, []);

  useImperativeHandle(ref, () => ({ getValue, setValue, clearValue }), []);

  return (
    <RatingListStyled>
      <RatingListTitle>Rating</RatingListTitle>
      <RatingListWrapper>
        <RatingListItem>
          <RatingInput
            id="rating-star-1"
            name={name}
            type="radio"
            value={1}
            ref={oneStarRef}
          />
          <RatingLabel htmlFor="rating-star-1">
            <AiFillStar />
          </RatingLabel>
        </RatingListItem>
        <RatingListItem>
          <RatingInput
            id="rating-star-2"
            name={name}
            type="radio"
            value={2}
            ref={twoStarRef}
          />
          <RatingLabel htmlFor="rating-star-2">
            <AiFillStar />
            <AiFillStar />
          </RatingLabel>
        </RatingListItem>
        <RatingListItem>
          <RatingInput
            id="rating-star-3"
            name={name}
            type="radio"
            value={3}
            ref={threeStarRef}
          />
          <RatingLabel htmlFor="rating-star-3">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </RatingLabel>
        </RatingListItem>
        <RatingListItem>
          <RatingInput
            id="rating-star-4"
            name={name}
            type="radio"
            value={4}
            ref={fourStarRef}
          />
          <RatingLabel htmlFor="rating-star-4">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </RatingLabel>
        </RatingListItem>
        <RatingListItem>
          <RatingInput
            id="rating-star-5"
            name={name}
            type="radio"
            value={5}
            ref={fiveStarRef}
          />
          <RatingLabel htmlFor="rating-star-5">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </RatingLabel>
        </RatingListItem>
      </RatingListWrapper>
    </RatingListStyled>
  );
});

RatingList.displayName = 'RatingList';
