import { mockCharacters } from '../../mocks/characters';

export const charactersService = {
  characters: () => mockCharacters,
  characterSingle: () => mockCharacters[0],
};
