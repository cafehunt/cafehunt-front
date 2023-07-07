import { FC } from 'react';
import { useExploreNew } from '../../hooks/useExploreNew';
import { StyledExploreList } from './ExploreList.styled';
import { ItemCardSmall } from '../ItemCardSmall';
import { Loader } from '../Loader';

export const ExploreList: FC = () => {
  const [data, status] = useExploreNew();

  if (status === 'loading') {
    return <Loader />;
  }

  return (
    <StyledExploreList>
      {data?.map((cafe) => (
        <ItemCardSmall key={cafe.id} cafe={cafe} />
      ))}
    </StyledExploreList>
  );
};
