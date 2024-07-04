import { Container, Avatar, TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { style } from '../components/style';

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
          variant="h5"
          gutterBottom
          marked="center"
          align="center"
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            marginTop: '10px',
          }}
        >
          Mot de passe oublié
        </Typography>
        <span style={style} />
        <Typography
          variant="body2"
          align="center"
        >
          Saisissez votre adresse email ci-dessous et nous vous enverrons un
          lien pour réinitialiser votre mot de passe.
        </Typography>
        <TextField
          sx={{ mt: 6 }}
          margin="normal"
          required
          fullWidth
          id="email"
          label="Adresse email"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Réinitialiser le mot de passe
        </Button>
      </Box>
    </Container>
  );
}
