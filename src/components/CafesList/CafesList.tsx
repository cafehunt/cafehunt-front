import { FC } from 'react';
import { Cafe } from '../../types/Cafe.type';
import { ItemCard } from '../ItemCard';

import { CafesListStyled } from './CafesListStyled';
import { FiltersType } from '../../types/Filters.type';

type Props = {
  cafes: Cafe[];
  page: number;
  filters: FiltersType;
};

export const CafesList: FC<Props> = ({ cafes, page, filters }) => {
  return (
    <CafesListStyled>
      {cafes?.map((cafe) => (
        <ItemCard key={cafe.id} cafe={cafe} page={page} filters={filters} />
      ))}
    </CafesListStyled>
  );
};
