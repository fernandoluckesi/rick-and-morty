import React from 'react';
import { FilterInput } from '../../components/FilterInput';
import { GridCardList } from '../../components/GridCardList';
import { MainTemplate } from '../../templates/MainTemplate';
import { ListItemsTemplate } from '../../templates/ListItemsTemplate';
import { Progress } from '../../components/Progress';
import { GridFilters } from '../../components/GridFilters';
import { MainPagination } from '../../components/MainPagination';
import { useLocationsList } from '../../hooks/useLocationsList';
import { LocationCard } from '../../components/LocationCard';

export function Locations() {
  const {
    locations,
    pages,
    page,
    handleSetPage,
    handleSetName,
    handleSetType,
    handleSetDimension,
    loading,
  } = useLocationsList();

  const handleChangePage = (_event, value) => {
    handleSetPage(value);
  };

  return (
    <MainTemplate>
      <ListItemsTemplate title={'Locations'}>
        <GridFilters>
          <FilterInput
            placeholder="Search name location..."
            setValue={handleSetName}
          />
          <FilterInput placeholder="Search type..." setValue={handleSetType} />
          <FilterInput
            placeholder="Search dimension..."
            setValue={handleSetDimension}
          />
        </GridFilters>
        {loading ? (
          <Progress />
        ) : (
          <>
            <GridCardList>
              {locations &&
                locations.map((location) => {
                  return (
                    <LocationCard
                      key={location.id}
                      id={location.id}
                      name={location.name}
                      type={location.type}
                      dimension={location.dimension}
                      residentsUrls={location.residents}
                    />
                  );
                })}
            </GridCardList>
            {locations && (
              <MainPagination
                pages={pages}
                page={page}
                shape="rounded"
                handleChangePage={handleChangePage}
              />
            )}
          </>
        )}
      </ListItemsTemplate>
    </MainTemplate>
  );
}
