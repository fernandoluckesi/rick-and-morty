import { useState, useEffect } from 'react';
import { getByUrl } from '../services/apis';

export function useLocation(id) {
  const [location, setLocation] = useState({});
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    getByUrl(`https://rickandmortyapi.com/api/location/${id}`)
      .then((data) => {
        setLocation(data);
        const residentsArray = data.residents;
        residentsArray.forEach((residentUrl) => {
          getByUrl(residentUrl).then((residentData) => {
            setResidents((oldState) => [
              ...oldState,
              {
                id: residentData,
                name: residentData.name,
                url: residentData.url,
              },
            ]);
          });
        });
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
      residents: residents,
      url: location.url,
      created: location.created,
    };
  }
  return 'Not Found';
}
