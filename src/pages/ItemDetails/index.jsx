import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { CharacterDetails } from '../../components/CharacterDetails';
import { MainTemplate } from '../../templates/MainTemplate';
import { MainContainer } from './styles';

export function ItemDetails() {
  const { category, id } = useParams();

  return (
    <MainTemplate>
      <MainContainer>
        {category === 'character' && (
          <CharacterDetails category={category} id={id} />
        )}
      </MainContainer>
    </MainTemplate>
  );
}
