import { TbMoodEmpty } from 'react-icons/tb';
import { Box } from 'components/Box';
import { Text } from './Notification.styled';

export const Notification = () => {
  return (
    <Box display="flex" gridGap={3} alignItems="center">
      <TbMoodEmpty size={24} />
      <Text>You haven't added any contact!</Text>
    </Box>
  );
};
