import axios from 'axios';

// URL base de la API de personajes de Futurama
const BASE_URL = 'https://futuramaapi.com/api/characters';

// Obtiene la lista de personajes desde la API
// Se usan los parámetros
export const getCharacters = async () => {
  const response = await axios.get(BASE_URL, {
    params: {
      orderBy: 'id',
      orderByDirection: 'asc',
      page: 1,
      size: 50,
    },
  });

  // La API retorna los personajes dentro de la propiedad "items"
  return response.data.items;
};