import React, { useState } from 'react';
import { InputStyled, MainContainer } from './styles';
import PropTypes from 'prop-types';

export function FilterInput({ placeholder, setValue }) {
  const handleChangeInputValue = (value) => {
    setValue(value);
  };

  return (
    <MainContainer>
      <InputStyled
        placeholder={placeholder}
        onChange={(event) => handleChangeInputValue(event.target.value)}
      />
    </MainContainer>
  );
}

FilterInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
