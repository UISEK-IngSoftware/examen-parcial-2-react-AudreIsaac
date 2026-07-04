import { List } from '@mui/material';
import CharacterCard from './CharacterCard';

// Recibe el arreglo de personajes y renderiza una card por cada uno
function CharacterList({ characters }) {
  return (
    <List>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </List>
  );
}

export default CharacterList;