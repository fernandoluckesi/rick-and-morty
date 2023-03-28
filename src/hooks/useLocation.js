import { useState, useEffect } from 'react';
import { getByUrl } from '../services/apis';

export function useLocation(url) {
  const [location, setLocation] = useState({});

  useEffect(() => {
    getByUrl(url)
      .then((data) => {
        setLocation(data);
      })
      .catch(() => {
        setLocation(false);
      });
  }, []);

  if (location) {
    return {
      id: location.id,
      name: location.name,
      type: location.type,
      dimension: location.dimension,
      residents: location.residents,
      url: location.url,
      created: location.created,
    };
  }
  return 'Not Found';
}
