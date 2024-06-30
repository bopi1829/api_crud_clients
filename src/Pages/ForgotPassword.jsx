import { Container, Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

export default function ForgotPassword() {
  return (
    <Container
      component="main"
      maxWidth="xs"
    >
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
        >
          Mot de passe oublié
        </Typography>
        <Typography
          component="p"
          variant="p"
        >
          Saisissez votre adresse e-mail ci-dessous et nous vous enverrons un
          lien pour réinitialiser votre mot de passe.
        </Typography>
      </Box>
    </Container>
  );
}
