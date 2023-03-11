import { useNavigate } from 'react-router-dom';
import BundleOfStorySection from '../components/templates/BundleOfStorySection';

const BundleOfStory = () => {
  const navigate = useNavigate();

  const moveToPage = () => {
    navigate('/story-detail');
  };

  return <BundleOfStorySection />;
};

export default BundleOfStory;
