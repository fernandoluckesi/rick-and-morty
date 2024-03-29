import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 32px;
  position: relative;

  @media (max-width: 1000px) {
    gap: 1rem;
  }
`;
