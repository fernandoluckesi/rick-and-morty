import React, { useEffect, useState } from 'react';
import { Info, MainContainer, Name } from './styles';
import PropTypes from 'prop-types';
import { getByUrl } from '../../services/apis';
import { useMedia } from 'react-use';

export function EpisodeCard({ id, name, airDate, episode, charactersUrls }) {
  const [characters, setCharacters] = useState([]);

  const isNotMobile = useMedia('(min-width: 1001px)');

  const getCharacterName = () => {
    charactersUrls.forEach((url) => {
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
    window.location.href = `/episode/${id}`;
  };

  useEffect(() => {
    getCharacterName();
  }, []);

  return (
    <MainContainer onClick={handleEpisodeDetailsRedirect}>
      <Name to={`/episode/${id}`}>{name}</Name>
      <Info>
        <h4>Episode:&ensp;</h4>
        <p>{episode}</p>
      </Info>
      <Info>
        <h4>Release:&ensp;</h4>
        <p>{airDate}</p>
      </Info>
      {isNotMobile && (
        <Info>
          <h4>Characters:&ensp;</h4>
          <p>{characters}</p>
        </Info>
      )}
    </MainContainer>
  );
}

EpisodeCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  airDate: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
  charactersUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};
