import styled from 'styled-components';
import catOfSchrodinger from '../../assets/images/cat-of-schrodinger.png';

export const Banner = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 325px;

  background: url(${catOfSchrodinger});
  background-repeat: no-repeat;
  background-size: cover;

  p {
    color: var(--text-light);
    font-family: 'Press Start 2P', cursive;
    font-size: 24px;
    margin: 0 auto;
    max-width: 655px;
    text-align: center;
    text-shadow: 4px 4px 15px var(--text-light);
  }
`;

export const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  padding: 64px 32px;
`;

export const ResumeContainer = styled.div`
  h2,
  p {
    color: var(--text-light);
  }

  h2 {
    margin-bottom: 32px;
  }

  p {
    line-height: 24px;
  }
`;

export const CardListContainer = styled.div`
  margin-top: 64px;
  h2 {
    color: var(--text-light);
    margin-bottom: 3rem;
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;
