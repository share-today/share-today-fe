import styled from 'styled-components';
import { ImageButton } from '../atoms/ImageButton';
import { Text } from '../atoms/Text';
import Theme from '../../styles/Theme';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import talk from '../../assets/images/talk.png';
import apple from '../../assets/images/apple.png';

const LoginSection = () => {
  const navigate = useNavigate();

  return (
    <LoginContainer>
      <Wrapper>
        <TitleContainer>
          <TitleH1>하루 공유</TitleH1>
          <Logo src={logo} alt='logo' />
        </TitleContainer>
        <ButtonGroup>
          <div
            onClick={() => {
              navigate('/home');
            }}
          >
            <ImageButton imgType='talk' color='#F8EB4F' width={20} height={3.5}>
              <ImgWrapper>
                <Img src={talk} alt='talk' />
                <Text>카카오톡으로 로그인</Text>
              </ImgWrapper>
            </ImageButton>
          </div>
          <div>
            <ImageButton
              imgType='apple'
              color='#000000'
              width={20}
              height={3.5}
            >
              <ImgWrapper>
                <Img src={apple} alt='apple' />
                <Text color='white'>Apple로 로그인</Text>
              </ImgWrapper>
            </ImageButton>
          </div>
        </ButtonGroup>
      </Wrapper>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  height: 91vh;
  margin: auto;
  background-color: ${Theme.colors.white};
`;

const Wrapper = styled.div`
  top: 8rem;
`;

const ButtonGroup = styled.div`
  margin-top: 18.75rem;
  margin-bottom: 3.3rem;
  text-align: center;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.75rem;
`;

const TitleContainer = styled.div`
  width: 14rem;
  height: 5.3rem;
  background: #ffffff;

  border: 1px solid #2b2b2b;
  text-align: center;
  margin: 0 auto;
`;

const TitleH1 = styled.h1`
  font-family: 'Cafe24 Ssurround';
  font-style: normal;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3rem;

  text-align: center;

  color: #2b2b2b;
  top: 1.2rem;
`;

const Logo = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  left: 7rem;
`;
export default LoginSection;
