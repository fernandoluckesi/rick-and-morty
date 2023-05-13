import { useEffect, useState } from 'react';
import { getLocationsList } from '../services/apis';

export function useLocationsList() {
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [dimension, setDimension] = useState('');

  const handleSetPage = (page) => {
    setPage(page);
  };
  const handleSetName = (name) => {
    setPage(1);
    setName(name);
  };
  const handleSetType = (type) => {
    setPage(1);
    setType(type);
  };
  const handleSetDimension = (dimension) => {
    setPage(1);
    setDimension(dimension);
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getLocationsList(page, name, type, dimension)
      .then((data) => {
        setLoading(false);
        setItems(data);
      })
      .catch(() => {
        setLoading(false);
        setItems([]);
      });
  }, [page, name, type, dimension]);

  return {
    count: items?.info?.count,
    nextPage: items?.info?.next,
    pages: items?.info?.pages,
    prevPage: items?.info?.prev,
    locations: items?.results,
    page,
    handleSetPage,
    handleSetName,
    handleSetType,
    handleSetDimension,
    loading,
  };
}
