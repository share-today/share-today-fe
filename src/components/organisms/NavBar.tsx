import styled, { css } from 'styled-components';
import { NavBarProps } from '../../types/types';

const NavBar = (props: NavBarProps) => {
  const clickTab = (index: number) => {
    props.setTabIndex(index);
  };

  return (
    <NavBarContainer>
      <div>
        {props.navMenu.map((menu, index) => {
          return (
            <MenuSpan
              isActive={props.tabIndex === index ? 'active' : ''}
              id={menu}
              key={index}
              onClick={() => clickTab(index)}
            >
              {menu}
            </MenuSpan>
          );
        })}
      </div>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  width: 22rem;
  border-bottom: 1px solid #2b2b2b;
  margin-top: 2rem;
  padding-left: 1rem;
`;

const MenuSpan = styled.span<{ isActive: string }>`
  margin-right: 1.5rem;
  margin-bottom: 0.7rem;
  cursor: pointer;

  ${(props) =>
    props.isActive === 'active'
      ? css`
          height: 18px;
          font-family: 'Cafe24 Ssurround';
          background: #e0e9ff;
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.5rem;
        `
      : css`
          font-family: 'Cafe24 Ssurround air';
          font-style: normal;
          font-weight: 300;
          font-size: 1rem;
          line-height: 1.5rem;
        `};
`;

export default NavBar;
