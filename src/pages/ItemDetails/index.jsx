import React from 'react';
import { useParams } from 'react-router-dom';
import { CharacterDetails } from '../../components/CharacterDetails';
import { MainTemplate } from '../../templates/MainTemplate';
import { MainContainer } from './styles';
import { EpisodeDetails } from '../../components/EpisodeDetails';
import { LocationDetails } from '../../components/LocationDetails';

export function ItemDetails() {
  const { category, id } = useParams();

  return (
    <MainTemplate>
      <MainContainer>
        {category === 'character' && <CharacterDetails id={id} />}
        {category === 'episode' && <EpisodeDetails id={id} />}
        {category === 'location' && <LocationDetails id={id} />}
      </MainContainer>
    </MainTemplate>
  );
}
