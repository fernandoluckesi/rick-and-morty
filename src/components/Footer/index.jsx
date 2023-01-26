import React from 'react';
import { ContentContainer, Icons, MainContainer, Signature } from './styles';
import githubIcon from '../../assets/images/github-icon.png';
import linkedinIcon from '../../assets/images/linkedin-icon.png';

export function Footer() {
  return (
    <MainContainer>
      <div>
        <Icons>
          <img src={githubIcon} alt="github icon" />
          <img src={linkedinIcon} alt="linkedin icon" />
        </Icons>
        <Signature>
          <span>&lt;/&gt;</span> by <span>Fernando Luckesi</span> 2022
        </Signature>
      </div>
    </MainContainer>
  );
}
