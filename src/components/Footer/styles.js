import styled from 'styled-components';

export const MainContainer = styled.footer`
  background-color: var(--background-light);
  display: flex;
  justify-content: center;
  padding: 4rem 1rem;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 2rem 1rem;
  }
`;

export const ContentContainer = styled.div``;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  @media (max-width: 1000px) {
    img {
      width: 2.5rem;
    }
  }
`;

export const Signature = styled.p`
  span {
    font-weight: var(--fontWeightSemiBold);
  }

  span:nth-child(1) {
    font-size: 1.2rem;
  }
`;
