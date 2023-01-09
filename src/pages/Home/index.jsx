import React, { useEffect, useState } from 'react';
import { MainTemplate } from '../../templates/MainTemplate';
import {
  Banner,
  ContentContainer,
  ResumeContainer,
  CardListContainer,
} from './styles';
import { getCharacters } from '../../services/apis';
import { CharacterCard } from '../../components/CharacterCard';

export function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((characters) => {
      setCharacters(characters.slice(0, 6));
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
            {characters.length > 0 &&
              characters.map((character) => {
                return (
                  <CharacterCard
                    avatar={character.image}
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    lastKnownLocation={character.species}
                    firstSeenIn={character.species}
                  />
                );
              })}
          </CardListContainer>
        </ContentContainer>
      </>
    </MainTemplate>
  );
}
