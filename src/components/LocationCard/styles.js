import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: var(--shape);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  width: calc(100% / 2 - 16px);

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    padding: 1rem;
    width: 100%;
  }
`;

export const Name = styled(Link)`
  color: var(--text-light);
  display: block;
  font-size: 1.5rem;
  font-weight: var(--fontWeightSemiBold);
  margin-bottom: 1rem;
  text-decoration: none;
  transition: color 0.2s;
  width: fit-content;
  &:hover {
    cursor: pointer;
    color: var(--blue);
  }
`;

export const Info = styled.div`
  display: flex;
  margin-bottom: 0.5rem;

  &:nth-last-child(1) {
    margin-bottom: 0;
  }

  h4 {
    color: var(--text-gray);
    font-weight: var(--fontWeightRegular);
  }

  p {
    color: var(--text-light);
    font-weight: var(--fontWeightMedium);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
