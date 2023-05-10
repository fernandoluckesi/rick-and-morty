import React from 'react';
import { MainContainer } from './styles';
import rickThinking from '../../assets/images/rick-thinking.png';

export function Progress() {
  return (
    <MainContainer>
      <img
        src={rickThinking}
        alt="rick thinking illustration of progress"
        className="progress-image"
      />
    </MainContainer>
  );
}
