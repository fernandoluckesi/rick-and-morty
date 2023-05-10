import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 4rem 2rem;

  @media (max-width: 1000px) {
    padding: 2rem 1rem;
  }
`;

export const PageTitle = styled.h1`
  color: var(--text-light);
  font-weight: var(--fontWeightSemiBold);
  margin-bottom: 48px;
`;

export const FiltersContainer = styled.div`
  align-items: center;
  display: flex;
  height: fit-content;
  gap: 10px;
  margin-bottom: 16px;

  .filters-icon {
    height: 16px;
  }

  .filters-text {
    color: var(--text-light);
    font-size: 20px;
  }
`;

export const Items = styled.div``;
