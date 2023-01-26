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
        <Logo src={RickAndMortyLogo} />
        {(isOpenDrawer || !isMobile) && (
          <Links $drawerTransition={drawerTransition}>
            <CloseBtn src={CloseIcon} onClick={handleCloseDrawer} />
            <li>
              <a href="">Characters</a>
            </li>
            <li>
              <a href="">Episodes</a>
            </li>
            <li>
              <a href="">Locations</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </Links>
        )}
        <MenuBtnMobile src={MenuIcon} onClick={handleOpenDrawer} />
      </Nav>
    </MainContainer>
  );
}
