import { useNavigate } from 'react-router-dom';
import NoticeSection from '../components/templates/NoticeSection';

const Notice = () => {
  const navigate = useNavigate();

  const moveToPage = () => {
    navigate('/notice-detail');
  };

  return (
    <>
      <NoticeSection />
    </>
  );
};

export default Notice;
