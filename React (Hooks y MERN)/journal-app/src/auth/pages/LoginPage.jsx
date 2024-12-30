import { Link as RouterLink } from 'react-router';
import { Google } from '@mui/icons-material';
import { Button, Grid2, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <form>
        <Grid2 container>
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
            container
            spacing={2}
            size={{ xs: 12 }}
            sx={{ mb: 1, mt: 3 }}
          >
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Button
                variant='contained'
                fullWidth
              >
                <Typography>Login</Typography>
                {/* Login */}
              </Button>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Button
                variant='contained'
                fullWidth
              >
                <Google sx={{ fontSize: 20 }} />
                <Typography sx={{ ml: 1 }}>Google</Typography>
                {/* Google */}
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
          <Link
            component={RouterLink}
            color='inherit'
            to='/auth/register'
          >
            Crear una cuenta
          </Link>
        </Grid2>
      </form>
    </AuthLayout>

    // <Grid2
    //   container
    //   spacing={0}
    //   direction='column'
    //   alignItems='center'
    //   justifyContent='center'
    //   sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    // >
    //   <Grid2
    //     className='box-shadow'
    //     size={{ xs: 12, sm: 4 }}
    //     sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
    //   >
    //     <Typography
    //       variant='h5'
    //       sx={{ mb: 1 }}
    //       textAlign={'center'}
    //     >
    //       Login
    //     </Typography>
    //     <form>
    //       <Grid2 container>
    //         <Grid2
    //           size={{ xs: 12 }}
    //           sx={{ mt: 2 }}
    //         >
    //           <TextField
    //             label='Correo'
    //             type='email'
    //             placeholder='correo@google.com'
    //             fullWidth
    //           />
    //         </Grid2>
    //         <Grid2
    //           size={{ xs: 12 }}
    //           sx={{ mt: 2 }}
    //         >
    //           <TextField
    //             label='Contraseña'
    //             type='password'
    //             placeholder='Contraseña'
    //             fullWidth
    //           />
    //         </Grid2>
    //         <Grid2
    //           container
    //           spacing={2}
    //           size={{ xs: 12 }}
    //           sx={{ mb: 1, mt: 3 }}
    //         >
    //           <Grid2 size={{ xs: 12, sm: 6 }}>
    //             <Button
    //               variant='contained'
    //               fullWidth
    //             >
    //               <Typography>Login</Typography>
    //               {/* Login */}
    //             </Button>
    //           </Grid2>

    //           <Grid2 size={{ xs: 12, sm: 6 }}>
    //             <Button
    //               variant='contained'
    //               fullWidth
    //             >
    //               <Google sx={{ fontSize: 20 }} />
    //               <Typography sx={{ ml: 1 }}>Google</Typography>
    //               {/* Google */}
    //             </Button>
    //           </Grid2>
    //         </Grid2>
    //       </Grid2>
    //       <Grid2
    //         container
    //         direction='row'
    //         justifyContent='end'
    //         sx={{ mt: 2 }}
    //       >
    //         <Link
    //           component={RouterLink}
    //           color='inherit'
    //           to='/auth/register'
    //         >
    //           Crear una cuenta
    //         </Link>
    //       </Grid2>
    //     </form>
    //   </Grid2>
    // </Grid2>
  );
};
