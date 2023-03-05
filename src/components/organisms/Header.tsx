import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import alarm from '../../assets/images/alarm.png';
import arrow from '../../assets/images/arrow.png';
import menu from '../../assets/images/menu.png';
import SideBar from './SideBar';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const moveToPage = () => {
    navigate('/notice');
  };

  const viewSideTab = () => {
    setIsOpen(!isOpen);
  };

  const goBack = () => {
    navigate(-1);
  };

  if (location.pathname === '/') {
    return (
      <>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <HeaderContainer>
          <img src={alarm} alt='alarm' onClick={moveToPage} />
          <img src={menu} alt='menu' onClick={viewSideTab} />
        </HeaderContainer>
      </>
    );
  } else if (
    location.pathname.includes('notice') ||
    location.pathname.includes('opinion')
  ) {
    return (
      <HeaderContainer>
        <img src={arrow} alt='arrow' onClick={goBack} />
      </HeaderContainer>
    );
  } else if (location.pathname.includes('story')) {
    return (
      <>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <HeaderContainerFlexEnd>
          <img src={menu} alt='menu' onClick={viewSideTab} />
        </HeaderContainerFlexEnd>
      </>
    );
  } else if (location.pathname.includes('setting')) {
    return (
      <>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <HeaderContainerFlexEnd>
          <img src={menu} alt='menu' onClick={viewSideTab} />
        </HeaderContainerFlexEnd>
      </>
    );
  } else {
    return <HeaderContainer />;
  }
};

const HeaderContainer = styled.div`
  display: flex;
  width: 23.4rem;
  justify-content: space-between;
  padding: 1.6rem 1.6rem 0 1.6rem;
  cursor: pointer;
`;

const HeaderContainerFlexEnd = styled.div`
  display: flex;
  width: 23.4rem;
  justify-content: flex-end;
  padding: 1.6rem 1.6rem 0 1.6rem;
  cursor: pointer;
`;

export default Header;
