import React from 'react';
import {
  MainContainer,
  Avatar,
  CharacterInfo,
  Name,
  StatusAndspecies,
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
  return (
    <MainContainer>
      <Avatar>
        <img src={avatar} />
      </Avatar>
      <CharacterInfo>
        <Name>{name}</Name>
        <StatusAndspecies>
          {status} - {species}{' '}
        </StatusAndspecies>
        <LastKnownLocation>
          <p>Last known location:</p>
          <p>{lastKnownLocation}</p>
        </LastKnownLocation>
        <FirstSeenIn>
          <p>First seen in:</p>
          <p>{firstSeenIn}</p>
        </FirstSeenIn>
      </CharacterInfo>
    </MainContainer>
  );
}
