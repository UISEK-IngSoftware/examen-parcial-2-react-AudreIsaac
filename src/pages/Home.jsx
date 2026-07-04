import { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  CircularProgress,
  Alert,
} from '@mui/material';
import CharacterList from '../components/CharacterList';
import { getCharacters } from '../services/futuramaService';
import './Home.css';

function Home() {
    // Lista de personajes obtenidos de la API
  const [characters, setCharacters] = useState([]);
    // Indica si la petición sigue en curso
  const [loading, setLoading] = useState(true);
    // Guarda el mensaje de error en caso de que falle la petición
  const [error, setError] = useState(null);

// Se ejecuta una sola vez al montar el componente
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCharacters();
        setCharacters(data);
      } catch {
        // Estado de error: la API falló o no respondió
        setError('No se pudo cargar la lista de personajes. Intenta de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Futurama App</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" className="home-container">
        {/* Estado de carga */}
        {loading && (
          <Box className="state-box">
            <CircularProgress />
          </Box>
        )}

        {/* Estado de error */}
        {!loading && error && <Alert severity="error">{error}</Alert>}

        {/* Estado vacío: la API respondió pero sin personajes */}
        {!loading && !error && characters.length === 0 && (
          <Alert severity="info">No hay personajes para mostrar.</Alert>
        )}

        {/* Estado con datos: se muestra la lista */}
        {!loading && !error && characters.length > 0 && (
          <CharacterList characters={characters} />
        )}
      </Container>
    </>
  );
}

export default Home;