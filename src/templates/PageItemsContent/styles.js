import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 4rem 2rem;

  @media (max-width: 1000px) {
    padding: 2rem 1rem;
  }
`;

export const PageTitle = styled.h1``;

export const Filters = styled.div`
  p {
    color: blue;
  }
`;

export const FilterInput = styled.input``;

export const FilterTagsContainer = styled.div``;

export const FilterTag = styled.button`
  background-color: ${({ isActiveTag }) =>
    isActiveTag ? 'white' : 'transparent'};
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  position: relative;

  @media (max-width: 1000px) {
    gap: 1rem;
  }
`;
