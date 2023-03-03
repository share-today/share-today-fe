import styled, { css } from 'styled-components';
import { NavBarProps } from '../../types/types';

const NavBar = (props: NavBarProps) => {
  const clickTab = (index: number) => {
    props.setTabIndex(index);
  };

  return (
    <NavBarContainer>
      <Wrap>
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
      </Wrap>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Wrap = styled.div`
  width: 22rem;
  border-bottom: 0.06rem solid #2b2b2b;
  margin-top: 2rem;
  padding-left: 1rem;
`;

const MenuSpan = styled.span<{ isActive: string; id: string }>`
  margin-right: 1.5rem;
  margin-bottom: 0.7rem;
  cursor: pointer;

  ${(props) => {
    if (props.id === '누군가의 어제' && props.isActive === 'active') {
      return css`
        height: 1.1rem;
        font-family: 'Cafe24 Ssurround';
        background: #ffe0e0;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.5rem;
      `;
    } else if (props.isActive === 'active') {
      return css`
        height: 1.1rem;
        font-family: 'Cafe24 Ssurround';
        background: #e0e9ff;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.5rem;
      `;
    } else {
      return css`
        font-family: 'Cafe24 Ssurround air';
        font-style: normal;
        font-weight: 300;
        font-size: 1rem;
        line-height: 1.5rem;
      `;
    }
  }}
`;

export default NavBar;
