import React from 'react';
import { useEpisode } from '../../hooks/useEpisode';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  MainContainer,
  Info,
  PageTitle,
  EpisodeName,
  EpisodeNumber,
  CharactersParticipants,
} from './styles';

export function EpisodeDetails({ id }) {
  const { name, episodeNumber, airDate, characters } = useEpisode(id);
  return (
    <MainContainer>
      <PageTitle>Episode details</PageTitle>
      <EpisodeName>{name} </EpisodeName>
      <EpisodeNumber>{episodeNumber} </EpisodeNumber>
      <Info>
        <p className="info-subtitle">Air date:</p>
        <p className="info-data">{airDate}</p>
      </Info>
      <CharactersParticipants>
        <h3 className="character-participates-title">
          Episodes that participates:
        </h3>
        <ul className="character-participates-list">
          {characters.map((character) => {
            return (
              <li className="character-participates-item">
                <Link
                  className="character-participates-link"
                  to={`/character/${character.url.replace(/\D/g, '')}`}
                  key={character.id}
                >
                  {character.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </CharactersParticipants>
    </MainContainer>
  );
}

EpisodeDetails.propTypes = {
  id: PropTypes.string.isRequired,
};
