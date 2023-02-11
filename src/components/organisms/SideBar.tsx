import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import close from '../../assets/images/close.png';

const SideBar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
        <Menu>홈</Menu>
        <Menu>이야기 묶음</Menu>
        <Menu>설정</Menu>
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
`;

export default SideBar;
