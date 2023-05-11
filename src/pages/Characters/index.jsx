import React from 'react';
import { useState } from 'react';
import { CharacterCard } from '../../components/CharacterCard';
import { FilterInput } from '../../components/FilterInput';
import { FilterTags } from '../../components/FilterTags';
import { GridCardList } from '../../components/GridCardList';
import { useCharactersList } from '../../hooks/useCharactersList';
import { MainTemplate } from '../../templates/MainTemplate';
import { ListItemsTemplate } from '../../templates/ListItemsTemplate';
import { Progress } from '../../components/Progress';
import { GridFilters } from '../../components/GridFilters';
import { MainPagination } from '../../components/MainPagination';

export function Characters() {
  const {
    characters,
    pages,
    page,
    handleSetPage,
    handleSetName,
    handleSetStatus,
    loading,
  } = useCharactersList();

  const [filterInputNameValue, setFilterInputNameValue] = useState('');

  const infoTagsFilter = {
    title: 'Status',
    options: ['All', 'Alive', 'Dead', 'Unknown'],
  };

  const handleChangePage = (_event, value) => {
    handleSetPage(value);
  };

  return (
    <MainTemplate>
      <ListItemsTemplate title={'Characters'}>
        <GridFilters>
          <FilterInput
            placeholder="Search name..."
            value={filterInputNameValue}
            setValue={handleSetName}
          />
          <FilterTags infoTags={infoTagsFilter} setValue={handleSetStatus} />
        </GridFilters>
        {loading ? (
          <Progress />
        ) : (
          <>
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
            <MainPagination
              pages={pages}
              page={page}
              shape="rounded"
              handleChangePage={handleChangePage}
            />
          </>
        )}
      </ListItemsTemplate>
    </MainTemplate>
  );
}
