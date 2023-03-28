import { useEffect, useState } from 'react';
import { getAllItemsByCategory } from '../services/apis';

export function useItems(category) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllItemsByCategory(category)
      .then((data) => {
        setItems(data);
      })
      .catch(() => {
        setItems([]);
      });
  }, []);

  return items;
}
