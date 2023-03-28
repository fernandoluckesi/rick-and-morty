import axios from 'axios';

export const getAllItemsByCategory = (category) => {
  return axios
    .get(`https://rickandmortyapi.com/api/${category}`)
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      return error;
    });
};

export const getByUrl = (url) => {
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export const getItemById = (category, id) => {
  return axios
    .get(`https://rickandmortyapi.com/api/${category}/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
