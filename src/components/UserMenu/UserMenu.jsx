import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import { Wrapper, Username, Name } from './UserMenu.styled';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { theme } from '../App';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>
        Welcome, <Name>{user.name}</Name>
      </Username>
      <Box margin="auto" theme={theme} onClick={() => dispatch(logOut())}>
        <Button
          color="secondary"
          size="small"
          variant="outlined"
          fontWeight={700}
          startIcon={<LogoutIcon />}
        >
          Logout
        </Button>
      </Box>
    </Wrapper>
  );
};
