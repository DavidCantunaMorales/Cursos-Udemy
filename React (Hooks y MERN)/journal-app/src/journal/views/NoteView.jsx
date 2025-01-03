import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid2, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components/ImageGallery';

export const NoteView = () => {
  return (
    <>
      <Grid2
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{ mb: 1 }}
      >
        <Grid2>
          <Typography
            fontSize={39}
            fontWeight='light'
          >
            2 de Enero del 2025
          </Typography>
        </Grid2>
        <Grid2>
          <Button
            color='primary'
            sx={{ padding: 2 }}
          >
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Guardar
          </Button>
        </Grid2>
      </Grid2>
      <Grid2 container>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Ingrese un Titulo'
          label='Titulo'
          sx={{ border: 'none', mb: 1 }}
        />
        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='¿Qué sucedio en el dia de hoy?'
          minRows={5}
        />
      </Grid2>
      <ImageGallery />
    </>
  );
};
