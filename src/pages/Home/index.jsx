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
import { getAllItemsByCategory } from '../../services/apis';
import { CharacterCard } from '../../components/CharacterCard';
import { EpisodeCard } from '../../components/EpisodeCard';
import { LocationCard } from '../../components/LocationCard';

export function Home() {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  const handleRedirectPageAllItems = (category) => {
    window.location.href = `/${category}`;
  };

  useEffect(() => {
    getAllItemsByCategory('character')
      .then((characters) => {
        setCharacters(characters.slice(0, 6));
      })
      .catch(() => {
        setCharacters([]);
      });
    getAllItemsByCategory('episode')
      .then((episodes) => {
        setEpisodes(episodes.slice(0, 6));
      })
      .catch(() => {
        setEpisodes([]);
      });
    getAllItemsByCategory('location')
      .then((locations) => {
        setLocations(locations.slice(0, 6));
      })
      .catch(() => {
        setLocations([]);
      });
  }, []);
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
            <CardList>
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
            </CardList>
            <ViewMoreBtn
              onClick={() => handleRedirectPageAllItems('characters')}
            >
              VIEW MORE CHARACTERS
            </ViewMoreBtn>
          </CardListContainer>
          <CardListContainer>
            <h2>Episodes</h2>
            <CardList>
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
            </CardList>
            <ViewMoreBtn onClick={() => handleRedirectPageAllItems('episodes')}>
              VIEW MORE EPISODES
            </ViewMoreBtn>
          </CardListContainer>
          <CardListContainer>
            <h2>Locations</h2>
            <CardList>
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
            </CardList>
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
