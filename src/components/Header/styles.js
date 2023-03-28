import styled, { keyframes } from 'styled-components';

export const MainContainer = styled.div`
  background-color: var(--background-light);
  width: 100%;
`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1500px;
  padding: 16px 32px;

  @media (max-width: 1000px) {
    padding: 16px;
  }
`;

export const modalMobileOpen = keyframes`
  0% {
    transform: translate(0, 100%);
  }
  70% {
    transform: translate(0, -5%);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export const Links = styled.ul`
  align-items: center;
  display: flex;

  li {
    margin-left: 64px;
    list-style: none;
  }

  a {
    color: var(--text-dark);
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      cursor: pointer;
      color: var(--blue);
    }
  }

  @media (max-width: 1000px) {
    background-color: var(--background-light);
    bottom: 0;
    border-radius: 30px 30px 0 0;
    flex-direction: column;
    left: 0;
    margin: 0;
    padding: 82px 0;
    position: fixed;
    transition: transform 0.3s;
    z-index: 1;
    width: 100vw;

    animation: ${modalMobileOpen} 0.6s;
    ${({ $drawerTransition }) =>
      !$drawerTransition && `transform: translate(0, 100%);`}

    li {
      margin-left: 0;
      margin-bottom: 32px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export const CloseBtn = styled.img`
  display: none;

  @media (max-width: 1000px) {
    display: block;
    margin: 32px 32px 0 0;
    position: absolute;
    right: 0;
    top: 0;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const MenuBtnMobile = styled.img`
  display: none;
  width: 32px;

  @media (max-width: 1000px) {
    display: block;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Logo = styled.img``;
