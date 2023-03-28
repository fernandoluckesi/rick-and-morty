import styled from 'styled-components';

export const MainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const PageTitle = styled.h1`
  color: var(--text-light);
  font-size: 2rem;
  margin-bottom: 4rem;
  width: 100%;

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const Avatar = styled.img`
  border: 6px solid var(--blue);
  border-radius: 50%;
  margin-bottom: 2rem;

  @media (max-width: 1000px) {
    max-width: 312px;
    width: 100%;
  }
`;

export const Name = styled.h2``;

export const Subtitle = styled.p`
  color: var(--text-light);
  font-size: 2rem;
  font-weight: var(--fontWeightSemiBold);
  line-height: 2.5rem;
  margin-bottom: 0.5rem;
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

export const Info = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  .info-subtitle {
    color: var(--text-gray);
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 4px;
  }

  .info-data {
    color: var(--text-light);
    font-size: 1rem;
    font-weight: var(--fontWeightMedium);
    line-height: 1.5rem;
    margin-bottom: 4px;
  }
`;

export const EpisodesThatParticipates = styled.div`
  margin-top: 2rem;

  .episodes-that-participates-title {
    color: var(--text-gray);
    font-size: 1.5rem;
    font-weight: var(--fontWeightSemiBold);
    margin-bottom: 2rem;
    text-align: center;
  }

  .episodes-that-participates-list {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .episodes-that-participates-item {
    list-style: none;
  }
  .episodes-that-participates-link {
    color: var(--text-light);
    display: block;
    font-size: 1rem;
    font-weight: var(--fontWeightSemiBold);
    margin-bottom: 1rem;
    text-align: center;
    text-decoration: none;

    transition: color 0.2s;
    &:hover {
      cursor: pointer;
      color: var(--blue);
    }
  }
`;
