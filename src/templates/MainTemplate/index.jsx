import React from "react";
import { Header } from "../../components/Header";
import { MainContainer } from "./styles";

export function MainTemplate({ children }) {
  return (
    <MainContainer>
      <Header />
      {children}
    </MainContainer>
  );
}