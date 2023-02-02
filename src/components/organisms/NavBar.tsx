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
  width: 23.4rem;
  margin: auto;

  border-bottom: 1px solid #2b2b2b;
  margin-top: 2rem;

  span {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    margin-right: 1.5rem;
    margin-bottom: 0.7rem;
  }
`;

export default NavBar;
