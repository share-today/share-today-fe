import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ImageButton } from '../components/atoms/ImageButton';
import { Text } from '../components/atoms/Text';

const Login = () => {
  const navigate = useNavigate();

  const moveToPage = () => {
    navigate('/');
  };

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
      </ButtonGroup>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  margin: auto;
  width: 23.4rem;
  border: 1px solid black;
  text-align: center;
`;

const Title = styled.p`
  margin: auto;
  width: 14rem;
  height: 5.3rem;
  padding: 2.1rem 0;
  border: 1px solid black;
  margin-top: 13rem;
  margin-bottom: 17.5rem;
`;

const ButtonGroup = styled.div`
  margin-bottom: 3.3rem;
`;
export default Login;
