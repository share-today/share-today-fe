import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HomeSection from '../components/templates/HomeSection';

const Home = () => {
  const navigate = useNavigate();

  const moveToPage = (event: MouseEvent<HTMLButtonElement>) => {
    switch (event.currentTarget.id) {
      case 'notice':
        navigate('/notice');
        break;
      case 'setting':
        navigate('/setting');
        break;
      case 'home':
        navigate('/');
        break;
      case 'story':
        navigate('/story');
        break;
    }
  };
  return (
    <>
      <HomeSection />
      {/* <div>
        <Button id='notice' onClick={moveToPage}>
          알림 페이지 이동
        </Button>
        <Button id='setting' onClick={moveToPage}>
          설정 페이지 이동
        </Button>
        <Button id='home' onClick={moveToPage}>
          홈 페이지 이동
        </Button>
        <Button id='story' onClick={moveToPage}>
          이야기 묶음 페이지 이동
        </Button>
      </div>
      <Input /> */}
    </>
  );
};

const Button = styled.button`
  border: 1px solid black;
`;

const Input = styled.input`
  width: 327px;
  height: 327px;
  background: linear-gradient(180deg, #e7edff 0%, #d8e3fe 100%);
  border-radius: 8px;
  border: none;
`;
export default Home;
