import React, { useEffect, useState } from 'react';
import { Info, MainContainer, Name } from './styles';
import PropTypes from 'prop-types';
import { getByUrl } from '../../services/apis';
import { useMedia } from 'react-use';

export function LocationCard({ id, name, type, dimension, residentsUrls }) {
  const [characters, setCharacters] = useState([]);

  const isNotMobile = useMedia('(min-width: 1001px)');

  const getCharacterName = () => {
    residentsUrls.forEach((url) => {
      getByUrl(url)
        .then((character) => {
          setCharacters((oldState) => [...oldState, `${character.name}, `]);
        })
        .catch(() => {
          setCharacters((oldState) => [...oldState, 'unknown']);
        });
    });
  };

  const handleEpisodeDetailsRedirect = () => {
    window.location.href = `/location/${id}`;
  };

  useEffect(() => {
    getCharacterName();
  }, []);

  return (
    <MainContainer
      onClick={handleEpisodeDetailsRedirect}
      data-testid="location-card"
    >
      <Name to={`/location/${id}`}>{name}</Name>
      <Info>
        <h4>Type:&ensp;</h4>
        <p>{type}</p>
      </Info>
      <Info>
        <h4>Dimension:&ensp;</h4>
        <p>{dimension}</p>
      </Info>
      {isNotMobile && (
        <Info>
          <h4>Residents:&ensp;</h4>
          <p>{characters}</p>
        </Info>
      )}
    </MainContainer>
  );
}

LocationCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dimension: PropTypes.string.isRequired,
  residentsUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};
