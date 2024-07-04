import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { style } from '../components/style';

export default function SignUpPage() {
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
          sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
        >
          S&apos;inscrire
        </Typography>
        <span style={style} />
        <Box
          component="form"
          noValidate
          sx={{ mt: 3 }}
        >
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              sm={6}
            >
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="Prénom"
                autoFocus
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <TextField
                required
                fullWidth
                id="lastName"
                label="Nom"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <TextField
                required
                fullWidth
                id="email"
                label="Adresse email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <TextField
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    value="allowExtraEmails"
                    color="primary"
                  />
                }
                label="J'accepte de recevoir, les promotions commerciales et les mises à jour par email"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            S&apos;inscrire
          </Button>
          <Grid
            container
            justifyContent="flex-end"
          >
            <Grid item>
              <Link
                href="/"
                to="/"
                variant="body2"
              >
                Vous avez déjà un compte ? Se connecter
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
