import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getByUrl } from '../../services/apis';
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
} from './styles';

export function CharacterCard({
  avatar,
  id,
  name,
  status,
  species,
  lastKnownLocationUrl,
  firstSeenInUrl,
}) {
  const [episode, setEpisode] = useState({});
  const [location, setLocation] = useState({});

  const isNotMobile = useMedia('(min-width: 1001px)');

  const getEpisode = () => {
    getByUrl(firstSeenInUrl)
      .then((result) => {
        setEpisode(result);
      })
      .catch(() => {
        setEpisode('Not found');
      });
  };

  const getLocation = () => {
    getByUrl(lastKnownLocationUrl)
      .then((result) => {
        setLocation(result);
      })
      .catch(() => {
        setLocation('Not found');
      });
  };

  const handleCharacterDetailsRedirect = () => {
    window.location.href = `/character/${id}`;
  };

  useEffect(() => {
    getEpisode();
    getLocation();
  }, []);

  return (
    <MainContainer>
      <Avatar onClick={handleCharacterDetailsRedirect}>
        <img src={avatar} alt={name} />
      </Avatar>
      <CharacterInfo>
        <Name to={`character/${id}`}>{name}</Name>
        <StatusAndSpecies status={status}>
          <span /> {status} - {species}{' '}
        </StatusAndSpecies>
        {isNotMobile && (
          <>
            <LastKnownLocation>
              <p>Last known location:</p>
              <Link to={`location/${location.id}`}>{location.name}</Link>
            </LastKnownLocation>
            <FirstSeenIn>
              <p>First seen in:</p>
              <Link to={`episode/${episode.id}`}>{episode.name}</Link>
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
