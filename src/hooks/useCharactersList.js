import { useEffect, useState } from 'react';
import { getCharactersList } from '../services/apis';

export function useCharactersList() {
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const handleSetPage = (page) => {
    setPage(page);
  };
  const handleSetName = (name) => {
    setPage(1);
    setName(name);
  };
  const handleSetStatus = (status) => {
    setPage(1);
    if (status === 'All') {
      setStatus('');
    } else {
      setStatus(status);
    }
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getCharactersList(page, name, status)
      .then((data) => {
        setLoading(false);
        setItems(data);
      })
      .catch(() => {
        setLoading(false);
        setItems([]);
      });
  }, [page, name, status]);

  return {
    count: items?.info?.count,
    nextPage: items?.info?.next,
    pages: items?.info?.pages,
    prevPage: items?.info?.prev,
    characters: items?.results,
    page,
    handleSetPage,
    handleSetName,
    handleSetStatus,
    loading,
  };
}
