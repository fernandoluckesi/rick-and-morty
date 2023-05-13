import React from 'react';
import { MainContainer } from './styles';
import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';
import { useMedia } from 'react-use';

export function MainPagination({ pages, page, handleChangePage }) {
  const ScreenExtraLarge = useMedia('(min-width: 1470px)');
  const ScreenLarge = useMedia('(min-width: 1318px)');
  const ScreenMedium = useMedia('(min-width: 1090px)');
  const ScreenSmall = useMedia('(min-width: 674px)');

  const responsivesiblingCount = () => {
    let siblingCount = 0;
    if (ScreenExtraLarge) {
      siblingCount = 15;
    } else if (ScreenLarge) {
      siblingCount = 13;
    } else if (ScreenMedium) {
      siblingCount = 7;
    } else if (ScreenSmall) {
      siblingCount = 5;
    } else {
      siblingCount = 0;
    }

    return siblingCount;
  };

  return (
    <MainContainer>
      <Pagination
        count={pages}
        page={page}
        siblingCount={responsivesiblingCount()}
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
