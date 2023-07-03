import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

type Props = {
  name: string;
};

export const BasicRating: FC<Props> = ({ name }) => {
  const [value, setValue] = useState<number | null>(0);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
        marginBottom: '26px',
      }}
    >
      <Rating
        name={name}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
};
