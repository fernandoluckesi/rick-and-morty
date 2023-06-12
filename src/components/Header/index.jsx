import React, { useState, useCallback } from 'react';
import {
  Links,
  Logo,
  MainContainer,
  Nav,
  CloseBtn,
  MenuBtnMobile,
} from './styles';
import RickAndMortyLogo from '../../assets/images/rick-and-morty-logo.png';
import CloseIcon from '../../assets/images/close-icon.png';
import MenuIcon from '../../assets/images/menu-icon.png';
import { useMedia } from 'react-use';
import { Link } from 'react-router-dom';

export function Header() {
  const [drawerTransition, setDrawerTransition] = useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const isMobile = useMedia('(max-width: 1000px)');

  const handleCloseDrawer = useCallback(() => {
    setDrawerTransition(false);

    setTimeout(() => {
      setIsOpenDrawer(false);
    }, 300);
  }, [setIsOpenDrawer]);

  const handleOpenDrawer = () => {
    if (isOpenDrawer) {
      handleCloseDrawer();
    } else {
      setIsOpenDrawer(true);
      setDrawerTransition(true);
    }
  };

  return (
    <MainContainer>
      <Nav>
        <Link to={'/'}>
          <Logo src={RickAndMortyLogo} />
        </Link>
        {(isOpenDrawer || !isMobile) && (
          <Links $drawerTransition={drawerTransition}>
            <CloseBtn src={CloseIcon} onClick={handleCloseDrawer} />
            <li>
              <Link to="/characters" data-testid="link-navigate-characters">
                Characters
              </Link>
            </li>
            <li>
              <Link to="/episodes" data-testid="link-navigate-episodes">
                Episodes
              </Link>
            </li>
            <li>
              <Link to="/locations" data-testid="link-navigate-locations">
                Locations
              </Link>
            </li>
            <li>
              <Link to="/about" data-testid="link-navigate-about">
                About
              </Link>
            </li>
          </Links>
        )}
        <MenuBtnMobile src={MenuIcon} onClick={handleOpenDrawer} />
      </Nav>
    </MainContainer>
  );
}
