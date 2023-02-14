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
    console.log('viewMenu');
    setIsOpen(true);
  };

  const goBack = () => {
    navigate(-1);
  };

  if (location.pathname === '/') {
    return (
      <>
        <HeaderContainer>
          <img src={alarm} alt='alarm' onClick={moveToPage} />
          <img src={menu} alt='menu' onClick={viewSideTab} />
        </HeaderContainer>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </>
    );
  } else if (location.pathname.includes('notice')) {
    return (
      <HeaderContainer>
        <img src={arrow} alt='arrow' onClick={goBack} />
      </HeaderContainer>
    );
  } else if (location.pathname.includes('story')) {
    return (
      <HeaderContainer>
        <img src={menu} alt='menu' />
      </HeaderContainer>
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
`;

export default Header;
