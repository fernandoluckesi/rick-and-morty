import { useEffect, useState } from 'react';
import { getCharactersList } from '../services/apis';

export function useCharactersList() {
  const [items, setItems] = useState([]);

  const [page, setPage] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    getCharactersList(page, name, status)
      .then((data) => {
        setItems(data);
      })
      .catch(() => {
        setItems([]);
      });
  }, [page, name, status]);

  return {
    count: items?.info?.count,
    nextPage: items?.info?.next,
    pages: items?.info?.pages,
    prevPage: items?.info?.prev,
    characters: items?.results,
    setPage,
    setName,
    setStatus,
  };
}
