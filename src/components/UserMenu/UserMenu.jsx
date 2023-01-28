import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrapper, Username } from './UserMenu.styled';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <Button
        color="secondary"
        variant="outlined"
        size="small"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Wrapper>
  );
};
