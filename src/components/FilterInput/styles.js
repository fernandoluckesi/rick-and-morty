import styled from 'styled-components';
import searchIcon from '../../assets/images/search-icon.png';

export const MainContainer = styled.div``;

export const InputStyled = styled.input`
  background: url(${searchIcon}) no-repeat;
  background-size: 22px;
  background-position: calc(100% - 12px);
  border: 2px solid var(--blue);
  border-radius: 4px;
  color: var(--text-light);
  outline: none;
  padding: 8px 12px;
`;
