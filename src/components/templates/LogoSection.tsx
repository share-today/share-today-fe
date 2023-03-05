import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

const LogoSection = () => {
  return (
    <TitleContainer>
      <TitleH1>하루 공유</TitleH1>
      <Logo src={logo} alt='logo' />
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  width: 25rem;
  height: 9rem;
  left: 16rem;
  top: 15rem;

  background: #ffffff;

  border: 1px solid #2b2b2b;
  text-align: center;
  padding: 2rem;
`;

const TitleH1 = styled.h1`
  font-family: 'Cafe24 Ssurround';
  font-style: normal;
  font-weight: 700;
  font-size: 5rem;
`;

const Logo = styled.img`
  width: 110px;
  height: 110px;
  left: 12rem;
  top: -1rem;
`;
export default LogoSection;
