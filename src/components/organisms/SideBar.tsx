import { useRef, useEffect, MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import close from '../../assets/images/close.png';
import Theme from '../../styles/Theme';

const SideBar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const outside = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handlerOutside);

    return () => {
      document.removeEventListener('mousedown', handlerOutside);
    };
  });

  const handlerOutside = (e: any) => {
    if (!outside.current) {
      return null;
    }

    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };

  const toggleSide = () => {
    setIsOpen(false);
  };

  const moveToPage = (e: MouseEvent<HTMLLIElement>) => {
    toggleSide();
    switch (e.currentTarget.id) {
      case 'home':
        navigate('/home');
        break;
      case 'story':
        navigate('/story');
        break;
      case 'setting':
        navigate('/setting');
        break;
    }
  };

  return (
    <SideBarContainer
      id='sidebar'
      ref={outside}
      className={isOpen ? 'open' : ''}
    >
      <SideBarContentContainer>
        <img
          src={close}
          alt='close'
          onClick={toggleSide}
          onKeyDown={toggleSide}
        />
        <ul>
          <Menu
            isSelected={location.pathname === '/home'}
            id='home'
            onClick={moveToPage}
          >
            홈
          </Menu>
          <Menu
            isSelected={location.pathname === '/story'}
            id='story'
            onClick={moveToPage}
          >
            이야기 묶음
          </Menu>
          <Menu
            isSelected={location.pathname === '/setting'}
            id='setting'
            onClick={moveToPage}
          >
            설정
          </Menu>
        </ul>
      </SideBarContentContainer>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  position: absolute;
  display: flex;

  height: 100%;
  width: 100%;
  text-align: right;
  z-index: 1;

  background: rgba(0, 0, 0, 0.6);
  top: 0;
  display: none;

  &.open {
    right: 0;
    display: block;
  }

  img {
    padding: 1.5rem;
    cursor: pointer;
  }
`;

const SideBarContentContainer = styled.div`
  height: 100%;
  width: 12.5rem;
  z-index: 2;
  margin-left: auto;
  background-color: ${Theme.colors.white};
`;

const Menu = styled.li<{ isSelected: boolean }>`
  margin: 50px 8px;
  cursor: pointer;
  bottom: -9.3rem;
  font-family: 'Cafe24 Ssurround air';
  font-style: normal;
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 1.5rem;

  text-align: center;
  color: ${Theme.colors.black};

  ${(props) =>
    props.isSelected
      ? css`
          background: #e0e9ff;
        `
      : css``}
`;

export default SideBar;
