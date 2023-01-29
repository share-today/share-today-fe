import styled from 'styled-components';
import { NavBarProps } from '../../types/types';

const NavBar = (props: NavBarProps) => {
  return (
    <NavBarContainer>
      {props.navMenu.map((menu, index) => {
        return <span key={index}>{menu}</span>;
      })}
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  width: 95%;
  margin: 0 0 0 auto;
  height: 3rem;
  border-bottom: 1px solid #2b2b2b;
  margin-top: 2rem;

  span {
    font-size: 1rem;
    font-weight: 700;
    line-height: 24px;
    margin-right: 1.5rem;
  }
`;

export default NavBar;
