import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { theme } from '../../src/components/App';

export default function Home() {
  return (
    <Container component="main" maxWidth="sm" theme={theme}>
      <Box
        sx={{
          marginTop: 32,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h1"
          color="primary.main"
          padding={theme.spacing(4)}
        >
          PhoneBOOK
        </Typography>
        <Typography
          component="h2"
          variant="h4"
          padding={theme.spacing(2)}
          color="primary.dark"
          fontWeight={700}
        >
          Simple - Intuitive - Efficeint
        </Typography>
        <Typography component="h5" variant=" h3" textAlign="center">
          "Your phonebook should be easy to use and actually help you achieve
          maximum productivity without compromising on the look and feel"
        </Typography>
      </Box>
    </Container>
  );
}
