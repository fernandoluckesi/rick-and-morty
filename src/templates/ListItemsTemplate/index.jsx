import React from 'react';
import { MainContainer, PageTitle, FiltersContainer, Items } from './styles';
import filterIcon from '../../assets/images/filter-icon.png';
import PropTypes from 'prop-types';

export function ListItemsTemplate({ children, title }) {
  return (
    <MainContainer>
      <PageTitle>{title}</PageTitle>
      <FiltersContainer>
        <img src={filterIcon} className="filters-icon" />
        <p className="filters-text">Filters</p>
      </FiltersContainer>
      <Items>{children}</Items>
    </MainContainer>
  );
}

ListItemsTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};
