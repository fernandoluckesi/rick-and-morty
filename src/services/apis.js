import axios from 'axios';

export const getCharacters = () => {
  return axios
    .get('https://rickandmortyapi.com/api/character')
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      return error;
    });
};
