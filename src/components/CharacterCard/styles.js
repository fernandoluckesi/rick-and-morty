import styled from 'styled-components';

export const MainContainer = styled.div`
  align-items: center;
  background-color: var(--shape);
  border-radius: 10px;
  display: flex;
  width: calc(100% / 2 - 16px);

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Avatar = styled.div`
  height: 210px;
  img {
    border-radius: 10px 0 0 10px;
    height: 210px;
    width: 210px;
  }
`;

export const CharacterInfo = styled.div`
  margin-left: 2rem;
`;

export const Name = styled.h3`
  color: var(--text-light);
  font-size: 1.5rem;
  font-weight: var(--fontWeightSemiBold);
  margin-bottom: 0.5rem;
`;

export const StatusAndSpecies = styled.p`
  align-items: center;
  color: var(--text-light);
  display: flex;
  margin-bottom: 1rem;

  span {
    ${({ status }) => status === 'Alive' && `background-color: var(--green);`};
    ${({ status }) => status === 'Dead' && `background-color: var(--red);`};
    ${({ status }) =>
      status === 'Unknown' && `background-color: var(--text-gray);`};
    border-radius: 50%;
    display: block;
    height: 0.5rem;
    margin-right: 0.5rem;
    width: 0.5rem;
  }
`;

export const LastKnownLocation = styled.div`
  margin-bottom: 16px;

  p {
  }

  p:nth-child(1) {
    color: var(--text-gray);
    margin-bottom: 4px;
  }

  p:nth-child(2) {
    color: var(--text-light);
    font-weight: var(--fontWeightMedium);
  }
`;

export const FirstSeenIn = styled.div`
  p {
  }

  p:nth-child(1) {
    color: var(--text-gray);
    margin-bottom: 4px;
  }

  p:nth-child(2) {
    color: var(--text-light);
    font-weight: var(--fontWeightMedium);
  }
`;
