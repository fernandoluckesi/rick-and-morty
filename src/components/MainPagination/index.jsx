import React from 'react';
import { MainContainer } from './styles';
import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';

export function MainPagination({ pages, page, handleChangePage }) {
  return (
    <MainContainer>
      <Pagination
        count={pages}
        page={page}
        siblingCount={4}
        shape="rounded"
        onChange={handleChangePage}
      />
    </MainContainer>
  );
}

MainPagination.propTypes = {
  pages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
};
