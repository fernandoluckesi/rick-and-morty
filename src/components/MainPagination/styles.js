import styled from 'styled-components';

export const MainContainer = styled.div`
  margin-top: 48px;
  .MuiPagination-ul {
    gap: 2px;
    justify-content: center;
    li {
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
