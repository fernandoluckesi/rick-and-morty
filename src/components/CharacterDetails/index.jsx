import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Avatar,
  EpisodesThatParticipates,
  Info,
  StatusAndSpecies,
  StatusPoint,
  MainContainer,
  PageTitle,
  Subtitle,
} from './styles';
import { useCharacter } from '../../hooks/useCharacter';

export function CharacterDetails({ id }) {
  const { episodes, image, location, origin, species, status, name } =
    useCharacter(id);

  return (
    <MainContainer>
      <PageTitle>Character details</PageTitle>
      <Avatar src={image} alt="character image perfil" />
      <Subtitle>{name}</Subtitle>
      <StatusAndSpecies>
        <StatusPoint status={status} /> {status} - {species}
      </StatusAndSpecies>
      <Info infoData={origin?.name}>
        <p className="info-subtitle">Origin:</p>
        <Link
          className="info-data"
          to={origin?.url ? `/location/${origin?.url.replace(/\D/g, '')}` : ''}
        >
          {origin?.name}
        </Link>
      </Info>
      <Info infoData={location?.name}>
        <p className="info-subtitle"> Last known location:</p>
        <Link
          className="info-data"
          to={
            location?.url ? `/location/${location?.url.replace(/\D/g, '')}` : ''
          }
        >
          {location?.name}
        </Link>
      </Info>
      <Info>
        <p className="info-subtitle">First seen in:</p>
        <Link
          className="info-data"
          to={`/episode/${episodes[0]?.url.replace(/\D/g, '')}`}
        >
          {episodes[0]?.name}
        </Link>
      </Info>
      <EpisodesThatParticipates>
        <h3 className="episodes-that-participates-title">
          Episodes that participates:
        </h3>
        <ul className="episodes-that-participates-list">
          {episodes.map((episode) => {
            return (
              <li className="episodes-that-participates-item">
                <Link
                  className="episodes-that-participates-link"
                  to={`/episode/${episode.url.replace(/\D/g, '')}`}
                  key={episode.id}
                >
                  {episode.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </EpisodesThatParticipates>
    </MainContainer>
  );
}

CharacterDetails.propTypes = {
  id: PropTypes.string.isRequired,
};
