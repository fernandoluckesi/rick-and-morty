import React, { useEffect } from 'react';
import { useState } from 'react';
import { CharacterCard } from '../../components/CharacterCard';
import { FilterInput } from '../../components/FilterInput';
import { GridCardList } from '../../components/GridCardList';
import { useCharactersList } from '../../hooks/useCharactersList';
import { useItems } from '../../hooks/useItems';
import { MainTemplate } from '../../templates/MainTemplate';
import { PageItemsContent } from '../../templates/PageItemsContent';
import { MainContainer } from './styles';

export function Characters() {
  const { characters, setPage, setName, setStatus } = useCharactersList();

  const [filterInputNameValue, setFilterInputNameValue] = useState('');

  const optionsItemsContent = {
    pageTitle: 'Characters',
    filters: [
      {
        type: 'input',
        placeholder: 'Search name...',
        title: 'name',
        options: [],
      },
      {
        type: 'tags',
        placeholder: '',
        title: 'Status',
        options: ['All', 'Alive', 'Dead', 'Unknown'],
      },
    ],
  };

  return (
    <MainTemplate>
      <MainContainer>
        <FilterInput
          placeholder="Search name..."
          value={filterInputNameValue}
          setValue={setName}
        />
        <p>teste: {filterInputNameValue} </p>
        <GridCardList>
          {characters &&
            characters.map((character) => {
              return (
                <CharacterCard
                  key={character.id}
                  avatar={character.image}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  lastKnownLocationUrl={character.location.url}
                  firstSeenInUrl={character.episode[0]}
                />
              );
            })}
        </GridCardList>
      </MainContainer>
    </MainTemplate>
  );
}
