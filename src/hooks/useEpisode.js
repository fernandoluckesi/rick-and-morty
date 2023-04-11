import { useState, useEffect } from 'react';
import { getByUrl } from '../services/apis';

export function useEpisode(id) {
  const [episode, setEpisode] = useState({});
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getByUrl(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((data) => {
        setEpisode(data);
        const charactersArray = data.characters;
        charactersArray.forEach((characterUrl) => {
          getByUrl(characterUrl).then((characterData) => {
            setCharacters((oldState) => [
              ...oldState,
              {
                id: characterData,
                name: characterData.name,
                url: characterData.url,
              },
            ]);
          });
        });
      })
      .catch(() => {
        setEpisode(false);
      });
  }, []);

  if (episode) {
    return {
      id: episode.id,
      name: episode.name,
      airDate: episode.air_date,
      episodeNumber: episode.episode,
      characters: characters,
      url: episode.url,
      created: episode.created,
    };
  }
  return 'Not Found';
}
