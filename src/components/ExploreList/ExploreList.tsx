import { FC } from 'react';
import { useExploreNew } from '../../hooks/useExploreNew';
import { StyledExploreList } from './ExploreList.styled';
import { ItemCardSmall } from '../ItemCardSmall';
import { Loader } from '../Loader';

export const ExploreList: FC = () => {
  const token = localStorage.getItem('accessToken') || '';
  const [data, status] = useExploreNew(token);

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
