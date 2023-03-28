import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getByUrl, getItemById } from '../../services/apis';
import PropTypes from 'prop-types';

import { useEpisode } from '../../hooks/useEpisode';
import { useLocation } from '../../hooks/useLocation';

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

export function CharacterDetails({ category, id }) {
  const [itemData, setItemData] = useState({});

  const { episodes, image, location, origin, species, status, name } =
    useCharacter(`https://rickandmortyapi.com/api/${category}/${id}`);

  return (
    <MainContainer>
      <PageTitle>Character details</PageTitle>
      <Avatar src={image} alt="character image perfil" />
      <Subtitle>{name}</Subtitle>
      <StatusAndSpecies>
        <StatusPoint status={status} /> {status} - {species}
      </StatusAndSpecies>
      <Info>
        <p className="info-subtitle">Origin:</p>
        <p className="info-data">{origin?.name}</p>
      </Info>
      <Info>
        <p className="info-subtitle"> Last known location:</p>
        <p className="info-data">{location?.name}</p>
      </Info>
      <Info>
        <p className="info-subtitle">First seen in:</p>
        <p className="info-data">{episodes[0]?.name}</p>
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
                  to={`episode/${episode.url.replace(/\D/g, '')}`}
                  key={episode.name}
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
