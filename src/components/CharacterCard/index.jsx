import React, { useEffect, useState } from 'react';
import { getEpisodeByUrl } from '../../services/apis';
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
  name,
  status,
  species,
  lastKnownLocation,
  firstSeenIn,
}) {
  const [episodeName, setEpisodeName] = useState('');

  const getEpisodeName = () => {
    getEpisodeByUrl(firstSeenIn)
      .then((result) => {
        setEpisodeName(result.name);
      })
      .catch(() => {
        setEpisodeName('Not found');
      });
  };

  useEffect(() => {
    getEpisodeName();
  }, []);

  return (
    <MainContainer>
      <Avatar>
        <img src={avatar} alt={name} />
      </Avatar>
      <CharacterInfo>
        <Name>{name}</Name>
        <StatusAndSpecies status={status}>
          <span /> {status} - {species}{' '}
        </StatusAndSpecies>
        <LastKnownLocation>
          <p>Last known location:</p>
          <p>{lastKnownLocation}</p>
        </LastKnownLocation>
        <FirstSeenIn>
          <p>First seen in:</p>
          <p>{episodeName}</p>
        </FirstSeenIn>
      </CharacterInfo>
    </MainContainer>
  );
}
