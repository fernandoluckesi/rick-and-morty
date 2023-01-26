import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Content, MainContainer } from './styles';

export function MainTemplate({ children }) {
  return (
    <MainContainer>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </MainContainer>
  );
}
