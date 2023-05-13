import styled from 'styled-components';

export const MainContainer = styled.div`
  margin-top: 48px;
  .MuiPagination-ul {
    justify-content: center;
    li {
      gap: 2px;
      button {
        background-color: var(--shape);
        color: var(--text-gray);
      }
      .Mui-selected {
        border: 2px solid var(--blue);
      }
      .MuiPaginationItem-ellipsis {
        color: var(--text-gray);
      }
    }
  }
`;
