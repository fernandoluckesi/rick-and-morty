import axios from 'axios';

/* export const getAllItemsByCategory = (category) => {
  return axios
    .get(`https://rickandmortyapi.com/api/${category}`)
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      return error;
    });
}; */

export const getAllItemsByCategory = async (category) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/${category}`
    );
    return response.data.results;
  } catch (error) {
    return error;
  }
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

export const getCharactersList = (page, name, status) => {
  return axios
    .get(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export const getLocationsList = (page, name, type, dimension) => {
  return axios
    .get(
      `https://rickandmortyapi.com/api/location/?page=${page}&name=${name}&type=${type}&dimension=${dimension}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export const getEpisodesList = (page, name, episode) => {
  return axios
    .get(
      `https://rickandmortyapi.com/api/episode/?page=${page}&name=${name}&episode=${episode}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
