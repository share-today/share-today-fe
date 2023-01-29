import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import arrow from '../../assets/arrow.png';

const Header = () => {
  const navigate = useNavigate();

  const moveToPage = () => {
    navigate('/');
  };

  return (
    <HeaderContainer>
      <img src={arrow} alt='arrow' onClick={moveToPage} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  top: 20px;
  left: 20px;
  margin: 73px auto 74px auto;
`;
export default Header;
