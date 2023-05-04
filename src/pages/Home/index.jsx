import React, { useEffect, useState } from 'react';
import { MainTemplate } from '../../templates/MainTemplate';
import {
  Banner,
  ContentContainer,
  ResumeContainer,
  CardListContainer,
  CardList,
  ViewMoreBtn,
} from './styles';

import { CharacterCard } from '../../components/CharacterCard';
import { EpisodeCard } from '../../components/EpisodeCard';
import { LocationCard } from '../../components/LocationCard';
import { useItems } from '../../hooks/useItems';
import { GridCardList } from '../../components/GridCardList';

export function Home() {
  const characters = useItems('character');
  const locations = useItems('location');
  const episodes = useItems('episode');

  const handleRedirectPageAllItems = (category) => {
    window.location.href = `/${category}`;
  };

  return (
    <MainTemplate>
      <>
        <Banner>
          <p>
            Does this site exist or not? Are you alive or dead? Are you unsure
            of that, Heisenberg?
          </p>
        </Banner>
        <ContentContainer>
          <ResumeContainer>
            <h2>Resume</h2>
            <p>
              &nbsp;&nbsp;It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English.
            </p>
          </ResumeContainer>
          <CardListContainer>
            <h2>Characters</h2>
            <GridCardList>
              {characters.length > 0 &&
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
            <ViewMoreBtn
              onClick={() => handleRedirectPageAllItems('characters')}
            >
              VIEW MORE CHARACTERS
            </ViewMoreBtn>
          </CardListContainer>
          <CardListContainer>
            <h2>Episodes</h2>
            <GridCardList>
              {episodes.length > 0 &&
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
            <ViewMoreBtn onClick={() => handleRedirectPageAllItems('episodes')}>
              VIEW MORE EPISODES
            </ViewMoreBtn>
          </CardListContainer>
          <CardListContainer>
            <h2>Locations</h2>
            <GridCardList>
              {locations.length > 0 &&
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
            <ViewMoreBtn
              onClick={() => handleRedirectPageAllItems('locations')}
            >
              VIEW MORE LOCATIONS
            </ViewMoreBtn>
          </CardListContainer>
        </ContentContainer>
      </>
    </MainTemplate>
  );
}
