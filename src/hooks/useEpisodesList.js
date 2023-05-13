import { useEffect, useState } from 'react';
import { getEpisodesList } from '../services/apis';

export function useEpisodesList() {
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [episode, setEpisode] = useState('');

  const handleSetPage = (page) => {
    setPage(page);
  };
  const handleSetName = (name) => {
    setPage(1);
    setName(name);
  };
  const handleSetEpisode = (episode) => {
    setPage(1);
    setEpisode(episode);
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getEpisodesList(page, name, episode)
      .then((data) => {
        setLoading(false);
        setItems(data);
      })
      .catch(() => {
        setLoading(false);
        setItems([]);
      });
  }, [page, name, episode]);

  return {
    count: items?.info?.count,
    nextPage: items?.info?.next,
    pages: items?.info?.pages,
    prevPage: items?.info?.prev,
    episodes: items?.results,
    page,
    handleSetPage,
    handleSetName,
    handleSetEpisode,
    loading,
  };
}
