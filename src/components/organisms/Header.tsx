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
      <IconDiv>
        <img src={arrow} alt='arrow' onClick={moveToPage} />
      </IconDiv>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  margin: auto;
  width: 23.4rem;
`;

const IconDiv = styled.div`
  margin-top: 1.6rem;
`;
export default Header;
