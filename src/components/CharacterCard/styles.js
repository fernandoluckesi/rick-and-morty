import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainContainer = styled.div`
  align-items: center;
  background-color: var(--shape);
  border-radius: 10px;
  display: flex;
  padding-right: 1rem;
  width: calc(100% / 2 - 16px);

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Avatar = styled.div`
  &:hover {
    cursor: pointer;
  }
  height: 210px;
  width: 210px;
  img {
    border-radius: 10px 0 0 10px;
    height: 210px;
    width: 210px;
  }

  @media (max-width: 1000px) {
    height: 150px;
    img {
      height: 150px;
      width: 150px;
    }
  }

  @media (max-width: 700px) {
    height: 100px;
    img {
      height: 100px;
      width: 100px;
    }
  }
`;

export const CharacterInfo = styled.div`
  margin-left: 2rem;
`;

export const Name = styled(Link)`
  color: var(--text-light);
  display: block;
  font-size: 1.5rem;
  font-weight: var(--fontWeightSemiBold);
  margin-bottom: 0.5rem;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    cursor: pointer;
    color: var(--blue);
  }
`;

export const StatusAndSpecies = styled.p`
  align-items: center;
  color: var(--text-light);
  display: flex;
  margin-bottom: 1rem;
`;

export const StatusPoint = styled.span`
  ${({ status }) => status === 'Alive' && `background-color: var(--green);`};
  ${({ status }) => status === 'Dead' && `background-color: var(--red);`};
  ${({ status }) =>
    status === ('unknown' || 'Unknown') &&
    `background-color: var(--text-gray);`};
  border-radius: 50%;
  display: block;
  height: 0.5rem;
  margin-right: 0.5rem;
  width: 0.5rem;
`;

export const LastKnownLocation = styled.div`
  margin-bottom: 16px;

  p {
    color: var(--text-gray);
    margin-bottom: 4px;
  }

  a {
    color: var(--text-light);
    font-weight: var(--fontWeightMedium);
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      cursor: pointer;
      color: var(--blue);
    }
  }
`;

export const FirstSeenIn = styled.div`
  p {
    color: var(--text-gray);
    margin-bottom: 4px;
  }

  a {
    color: var(--text-light);
    font-weight: var(--fontWeightMedium);
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      cursor: pointer;
      color: var(--blue);
    }
  }
`;
