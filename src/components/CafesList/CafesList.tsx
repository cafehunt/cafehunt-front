import { FC } from 'react';
import { Cafe } from '../../types/Cafe.type';
import { ItemCard } from '../ItemCard';

import { CafesListStyled } from './CafesListStyled';

type Props = {
  cafes: Cafe[];
};

export const CafesList: FC<Props> = ({ cafes }) => {
  return (
    <CafesListStyled>
      {cafes?.map((cafe) => (
        <ItemCard key={cafe.id} cafe={cafe} />
      ))}
    </CafesListStyled>
  );
};
