import { ButtonLink, Link, Wrapper } from './AuthNav.styled';
import { theme } from '../App';

export const AuthNav = () => {
  return (
    <Wrapper theme={theme}>
      <ButtonLink
        as={Link}
        to="/register"
        color="secondary"
        size="small"
        variant="outlined"
        component={Link}
      >
        Register
      </ButtonLink>
      <ButtonLink
        as={Link}
        to="/login"
        color="secondary"
        size="small"
        variant="outlined"
        component={Link}
      >
        Log In
      </ButtonLink>
    </Wrapper>
  );
};
