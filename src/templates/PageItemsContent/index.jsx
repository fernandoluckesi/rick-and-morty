import React, { useState } from 'react';
import {
  CardList,
  Filters,
  MainContainer,
  PageTitle,
  FilterInput,
  FilterTagsContainer,
  FilterTag,
} from './styles';

export function PageItemsContent({ children, options }) {
  const [activeTag, setActiveTag] = useState('All');

  const handleClickActiveTag = (option) => {
    setActiveTag(option);
  };

  return (
    <MainContainer>
      <PageTitle>{options.pageTitle}</PageTitle>
      <Filters>
        {options.filters.map((filter) => {
          if (filter.type === 'input') {
            return <FilterInput placeholder={filter.placeholder} />;
          } else if (filter.type === 'tags') {
            return (
              <FilterTagsContainer>
                <h3>{filter.title} </h3>
                {filter.options.map((option) => {
                  return (
                    <FilterTag
                      isActiveTag={activeTag === option}
                      onClick={() => handleClickActiveTag(option)}
                    >
                      <p className="text-tag">{option}</p>{' '}
                    </FilterTag>
                  );
                })}
              </FilterTagsContainer>
            );
          }
        })}
      </Filters>
      <CardList>{children}</CardList>
    </MainContainer>
  );
}
