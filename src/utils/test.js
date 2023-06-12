import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const Providers = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

export const renderWithProviders = (ui, options) => {
  render(ui, {
    wrapper: Providers,
    ...options,
  });
};

export * from '@testing-library/react';
export { renderWithProviders as render };
