import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';

import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AppBarStyled } from './AppBar.styled';

export const AppBarNavigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBarStyled>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SummarizeRoundedIcon sx={{ display: { md: 'flex' }, mr: 2 }} />
          <Typography
            variant="h6"
            noWrap
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MY CONTACTS
          </Typography>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBarStyled>
  );
};
