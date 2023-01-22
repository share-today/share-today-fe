import styled from 'styled-components';
import { ImageButton } from '../components/atoms/ImageButton';
import { Text } from '../components/atoms/Text';

const Login = () => {
  return (
    <LoginContainer>
      <Title>하루 공유</Title>
      <ButtonGroup>
        <div>
          <ImageButton imgType='talk' color='#F8EB4F' width={20} height={3.5}>
            <Text>카카오톡으로 로그인</Text>
          </ImageButton>
        </div>
        <div>
          <ImageButton imgType='apple' color='#000000' width={20} height={3.5}>
            <Text color='white'>Apple로 로그인</Text>
          </ImageButton>
        </div>
        <div>
          <Text>건너뛰기</Text>
        </div>
      </ButtonGroup>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  margin: auto;
  width: 375px;
  border: 1px solid black;
  text-align: center;
`;

const Title = styled.p`
  margin: auto;
  width: 224px;
  height: 86px;
  padding: 35px 0;
  border: 1px solid black;
  margin-top: 208px;
  margin-bottom: 280px;
`;

const ButtonGroup = styled.div`
  margin-bottom: 54px;
`;
export default Login;
