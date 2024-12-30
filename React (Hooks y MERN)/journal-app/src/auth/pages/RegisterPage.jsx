import { Link as RouterLink } from 'react-router';
import { Button, Grid2, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear Cuenta'>
      <form>
        <Grid2 container>
          <Grid2
            size={{ xs: 12 }}
            sx={{ mt: 2 }}
          >
            <TextField
              label='Nombre Completo'
              type='text'
              placeholder='David Cantuña'
              fullWidth
            />
          </Grid2>
          <Grid2
            size={{ xs: 12 }}
            sx={{ mt: 2 }}
          >
            <TextField
              label='Correo'
              type='email'
              placeholder='correo@google.com'
              fullWidth
            />
          </Grid2>
          <Grid2
            size={{ xs: 12 }}
            sx={{ mt: 2 }}
          >
            <TextField
              label='Contraseña'
              type='password'
              placeholder='Contraseña'
              fullWidth
            />
          </Grid2>
          <Grid2
            size={12}
            sx={{ mb: 1, mt: 3 }}
          >
            <Grid2>
              <Button
                variant='contained'
                fullWidth
              >
                <Typography>Crear Cuenta</Typography>
                {/* Login */}
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2
          container
          direction='row'
          justifyContent='end'
          sx={{ mt: 2 }}
        >
          <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
          <Link
            component={RouterLink}
            color='inherit'
            to='/auth/login'
          >
            Ingresar
          </Link>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
