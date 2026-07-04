import { Card, CardContent, Avatar, Typography, Box, Chip } from '@mui/material';
import './CharacterCard.css';

// Muestra la información de un solo personaje: imagen, nombre, género y estado
function CharacterCard({ character }) {
  const { name, image, gender, status } = character;
    // Color del chip de estado según el valor recibido de la API
  const statusColor = status === 'ALIVE' ? 'success' : status === 'DEAD' ? 'error' : 'default';

  return (
    <Card className="character-card">
        {/* Imagen del personaje */}
      <Avatar src={image} alt={name} className="character-avatar" />
      <CardContent className="character-content">
        {/* Nombre del personaje */}
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        {/* Género y estado vital */}
        <Box className="character-tags">
          <Chip label={`Género: ${gender}`} size="small" variant="outlined" />
          <Chip label={`Estado: ${status}`} size="small" color={statusColor} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default CharacterCard;
