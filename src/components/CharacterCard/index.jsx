import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMedia } from 'react-use';
import PropTypes from 'prop-types';

import {
  MainContainer,
  Avatar,
  CharacterInfo,
  Name,
  StatusAndSpecies,
  LastKnownLocation,
  FirstSeenIn,
  StatusPoint,
} from './styles';
import { useEpisode } from '../../hooks/useEpisode';
import { useLocation } from '../../hooks/useLocation';

export function CharacterCard({
  avatar,
  id,
  name,
  status,
  species,
  lastKnownLocationUrl,
  firstSeenInUrl,
}) {
  const episodeId = firstSeenInUrl.replace(/\D/g, '');
  const { name: episodeName } = useEpisode(episodeId);

  const locationId = lastKnownLocationUrl.replace(/\D/g, '');
  const { name: locationName } = useLocation(locationId);

  const isNotMobile = useMedia('(min-width: 1001px)');

  const handleCharacterDetailsRedirect = () => {
    window.location.href = `/character/${id}`;
  };

  return (
    <MainContainer data-testid="character-card">
      <Avatar onClick={handleCharacterDetailsRedirect}>
        <img src={avatar} alt={name} />
      </Avatar>
      <CharacterInfo>
        <Name to={`/character/${id}`}>{name}</Name>
        <StatusAndSpecies>
          <StatusPoint status={status} /> {status} - {species}{' '}
        </StatusAndSpecies>
        {isNotMobile && (
          <>
            <LastKnownLocation>
              <p>Last known location:</p>
              {(locationName && (
                <Link to={`/location/${locationId}`}>{locationName}</Link>
              )) || <a>unknown</a>}
            </LastKnownLocation>
            <FirstSeenIn>
              <p>First seen in:</p>
              <Link to={`/episode/${episodeId}`}>{episodeName}</Link>
            </FirstSeenIn>
          </>
        )}
      </CharacterInfo>
    </MainContainer>
  );
}

CharacterCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  lastKnownLocationUrl: PropTypes.string.isRequired,
  firstSeenInUrl: PropTypes.string.isRequired,
};
