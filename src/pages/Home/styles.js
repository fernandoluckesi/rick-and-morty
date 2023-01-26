import styled from 'styled-components';
import catOfSchrodinger from '../../assets/images/cat-of-schrodinger.png';

export const Banner = styled.div`
  background: url(${catOfSchrodinger});
  background-repeat: no-repeat;
  background-size: cover;

  align-items: center;
  display: flex;
  justify-content: center;
  height: 325px;

  p {
    color: var(--text-light);
    font-family: 'Press Start 2P', cursive;
    font-size: 1.5rem;
    margin: 0 auto;
    max-width: 655px;
    text-align: center;
    text-shadow: 4px 4px 15px var(--text-light);
  }
`;

export const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  padding: 4rem 2rem;

  @media (max-width: 1000px) {
    padding: 2rem 1rem;
  }
`;

export const ResumeContainer = styled.div`
  h2,
  p {
    color: var(--text-light);
  }

  h2 {
    margin-bottom: 2rem;
  }

  p {
    line-height: 24px;
  }
`;

export const CardListContainer = styled.div`
  margin: 4rem 0;
  h2 {
    color: var(--text-light);
    margin-bottom: 3rem;
  }

  @media (max-width: 1000px) {
    h2 {
      margin-bottom: 2rem;
    }
  }
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

export const ViewMoreBtn = styled.button`
  background-color: transparent;
  border: 2px solid var(--blue);
  border-radius: 10px;
  color: var(--blue);
  display: block;
  font-weight: var(--fontWeightSemiBold);
  line-height: 1.5rem;
  margin: 3rem auto 0;
  padding: 1rem;
  transition: background-color 0.5s, border-color 0.5s, color 0.5s;
  width: 450px;

  &:hover {
    color: var(--text-gray);
    cursor: pointer;
    background-color: var(--background-light);
    border-color: var(--background-light);
  }

  @media (max-width: 1000px) {
    margin-top: 2rem;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
