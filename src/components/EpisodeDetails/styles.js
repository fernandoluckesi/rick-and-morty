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

export const EpisodeName = styled.h2`
  color: var(--text-light);
  font-size: 2.5rem;
  font-weight: var(--fontWeightSemiBold);
  margin-bottom: 0.5rem;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 2rem;
  }
`;

export const EpisodeNumber = styled.h3`
  color: var(--text-light);
  font-size: 2rem;
  font-weight: var(--fontWeightSemiBold);
  line-height: 2.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
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

export const CharactersParticipants = styled.div`
  margin-top: 2rem;

  .character-participates-title {
    color: var(--text-gray);
    font-size: 1.5rem;
    font-weight: var(--fontWeightSemiBold);
    margin-bottom: 2rem;
    text-align: center;
  }

  .character-participates-list {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .character-participates-item {
    list-style: none;
  }
  .character-participates-link {
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
