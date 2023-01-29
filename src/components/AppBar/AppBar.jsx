import { useAuth } from 'hooks';

import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';

import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AppBarStyled, Link } from './AppBar.styled';

export const AppBarNavigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBarStyled>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <SummarizeRoundedIcon sx={{ display: { md: 'flex' }, mr: 2 }} />
            <Typography
              variant="h6"
              sx={{
                mr: 6,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
              }}
            >
              MY CONTACTS
            </Typography>
          </Link>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBarStyled>
  );
};
