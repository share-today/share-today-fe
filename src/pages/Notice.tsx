import { useNavigate } from 'react-router-dom';

const Notice = () => {
  const navigate = useNavigate();

  const moveToPage = () => {
    navigate('/notice-detail');
  };

  return (
    <>
      <button onClick={moveToPage}>알림 디테일 페이지 이동</button>
    </>
  );
};

export default Notice;
