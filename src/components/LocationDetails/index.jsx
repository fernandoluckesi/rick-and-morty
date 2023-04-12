import React from 'react';
import { useLocation } from '../../hooks/useLocation';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  MainContainer,
  Info,
  PageTitle,
  LocationName,
  Residents,
} from './styles';

export function LocationDetails({ id }) {
  const { name, type, dimension, residents } = useLocation(id);

  return (
    <MainContainer>
      <PageTitle>Location details</PageTitle>
      <LocationName>{name}</LocationName>
      <Info>
        <p className="info-subtitle">Type:</p>
        <p className="info-data">{type}</p>
      </Info>
      <Info>
        <p className="info-subtitle">Dimension:</p>
        <p className="info-data">{dimension}</p>
      </Info>
      <Residents>
        <h3 className="residents-title">Episodes that participates:</h3>
        <ul className="residents-list">
          {residents.map((resident) => {
            return (
              <li className="residents-item">
                <Link
                  className="residents-link"
                  to={`/character/${resident?.url.replace(/\D/g, '')}`}
                  key={resident.id}
                >
                  {resident.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </Residents>
    </MainContainer>
  );
}

LocationDetails.propTypes = {
  id: PropTypes.string.isRequired,
};
