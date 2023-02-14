import { useRef, useEffect, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import close from '../../assets/images/close.png';

const SideBar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const outside = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handlerOutsie);

    return () => {
      document.removeEventListener('mousedown', handlerOutsie);
    };
  });

  const handlerOutsie = (e: any) => {
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
        navigate('/');
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
      <img
        src={close}
        alt='close'
        onClick={toggleSide}
        onKeyDown={toggleSide}
      />
      <ul>
        <Menu id='home' onClick={moveToPage}>
          홈
        </Menu>
        <Menu id='story' onClick={moveToPage}>
          이야기 묶음
        </Menu>
        <Menu id='setting' onClick={moveToPage}>
          설정
        </Menu>
      </ul>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 12.5rem;

  z-index: 5;
  padding: 12px;
  background-color: beige;

  top: 0;
  display: none;

  &.open {
    right: 0;
    display: block;
  }
`;

const Menu = styled.li`
  margin: 30px 8px;

  cursor: pointer;
`;

export default SideBar;
