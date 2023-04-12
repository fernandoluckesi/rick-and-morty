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

export const LocationName = styled.h2`
  color: var(--text-light);
  font-size: 2.5rem;
  font-weight: var(--fontWeightSemiBold);
  margin-bottom: 0.5rem;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 2rem;
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

export const Residents = styled.div`
  margin-top: 2rem;

  .residents-title {
    color: var(--text-gray);
    font-size: 1.5rem;
    font-weight: var(--fontWeightSemiBold);
    margin-bottom: 2rem;
    text-align: center;
  }

  .residents-list {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .residents-item {
    list-style: none;
  }
  .residents-link {
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
