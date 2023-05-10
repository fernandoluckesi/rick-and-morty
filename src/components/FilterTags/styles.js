import styled from 'styled-components';

export const MainContainer = styled.div``;

export const FilterTitle = styled.h3`
  color: var(--text-light);
  font-size: 16px;
  font-weight: var(--fontWeightRegular);
  margin-bottom: 16px;
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Tag = styled.button`
  background-color: ${({ isActiveTag }) =>
    isActiveTag ? 'var(--blue)' : 'transparent'};
  border: 2px solid var(--blue);
  border-radius: 40px;
  color: ${({ isActiveTag }) => (isActiveTag ? 'var(--shape)' : 'var(--blue)')};
  cursor: pointer;
  display: block;
  min-width: 68px;
  padding: 10px;
`;
