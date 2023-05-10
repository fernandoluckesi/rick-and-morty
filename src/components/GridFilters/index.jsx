import React from 'react';
import { MainContainer } from './styles';
import PropTypes from 'prop-types';

export function GridFilters({ children }) {
  return <MainContainer>{children}</MainContainer>;
}

GridFilters.propTypes = {
  children: PropTypes.element.isRequired,
};
