import { useState, useEffect } from 'react';
import { getByUrl } from '../services/apis';

export function useEpisode(url) {
  const [episode, setEpisode] = useState({});

  useEffect(() => {
    getByUrl(url)
      .then((data) => {
        setEpisode(data);
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
      characters: episode.characters,
      url: episode.url,
      created: episode.created,
    };
  }
  return 'Not Found';
}
