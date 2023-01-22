import { useNavigate } from 'react-router-dom';

const BundleOfStory = () => {
  const navigate = useNavigate();

  const moveToPage = () => {
    navigate('/story-detail');
  };

  return (
    <>
      <button onClick={moveToPage}>이야기 묶음 디테일 페이지 이동</button>
    </>
  );
};

export default BundleOfStory;
