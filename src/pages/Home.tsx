import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
    </>
  );
};

const Button = styled.button`
  border: 1px solid black;
`;

export default Home;
