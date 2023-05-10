import React, { useState } from 'react';
import { MainContainer, FilterTitle, Tag, TagsContainer } from './styles';
import PropTypes from 'prop-types';

export function FilterTags({ infoTags, setValue }) {
  const [activeTag, setActiveTag] = useState(infoTags.options[0]);

  const handleClickActiveTag = (option) => {
    setActiveTag(option);
    setValue(option);
  };

  return (
    <MainContainer>
      <FilterTitle>{infoTags.title} </FilterTitle>
      <TagsContainer>
        {infoTags.options.map((option) => {
          return (
            <Tag
              isActiveTag={activeTag === option}
              onClick={() => handleClickActiveTag(option)}
            >
              {option}
            </Tag>
          );
        })}
      </TagsContainer>
    </MainContainer>
  );
}

FilterTags.propTypes = {
  infoTags: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
};
