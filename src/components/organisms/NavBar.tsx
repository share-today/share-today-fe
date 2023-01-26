import styled from 'styled-components';

const navMenu = ['나의 오늘', '나의 어제', '누군가의 어제'];
const NavBar = () => {
  return (
    <NavBarContainer>
      {navMenu.map((menu) => {
        return <span>{menu}</span>;
      })}
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  width: 95%;
  margin: 0 0 0 auto;
  height: 3rem;
  border-bottom: 2px solid black;
  margin-top: 2rem;

  span {
    font-size: 1.5rem;
    margin-left: 16rem;
  }
`;

export default NavBar;
