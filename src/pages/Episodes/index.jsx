import React from 'react';
import { FilterInput } from '../../components/FilterInput';
import { GridCardList } from '../../components/GridCardList';
import { MainTemplate } from '../../templates/MainTemplate';
import { ListItemsTemplate } from '../../templates/ListItemsTemplate';
import { Progress } from '../../components/Progress';
import { GridFilters } from '../../components/GridFilters';
import { MainPagination } from '../../components/MainPagination';
import { EpisodeCard } from '../../components/EpisodeCard';
import { useEpisodesList } from '../../hooks/useEpisodesList';

export function Episodes() {
  const {
    episodes,
    pages,
    page,
    handleSetPage,
    handleSetName,
    handleSetEpisode,
    loading,
  } = useEpisodesList();

  const handleChangePage = (_event, value) => {
    handleSetPage(value);
  };

  return (
    <MainTemplate>
      <ListItemsTemplate title={'Episodes'}>
        <GridFilters>
          <FilterInput
            placeholder="Search name episode..."
            setValue={handleSetName}
          />
          <FilterInput
            placeholder="Search number episode..."
            setValue={handleSetEpisode}
          />
        </GridFilters>
        {loading ? (
          <Progress />
        ) : (
          <>
            <GridCardList>
              {episodes &&
                episodes.map((episode) => {
                  return (
                    <EpisodeCard
                      key={episode.id}
                      id={episode.id}
                      name={episode.name}
                      airDate={episode.air_date}
                      episode={episode.episode}
                      charactersUrls={episode.characters}
                    />
                  );
                })}
            </GridCardList>
            {episodes && (
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
