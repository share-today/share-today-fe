import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Theme from './styles/Theme';
import Header from './components/organisms/Header';
import BundleOfStory from './pages/BundleOfStory';
import BundleOfStoryDetail from './pages/BundleOfStoryDetail';
import Home from './pages/Home';
import LogoSection from './components/templates/LogoSection';
import Login from './pages/Login';
import Notice from './pages/Notice';
import NoticeDetail from './pages/NoticeDetail';
import Setting from './pages/Setting';
import SendOpinion from './pages/SendOpinion';

const Router = () => {
  return (
    <BrowserRouter>
      <RouterContainer>
        <LogoSection />
        <MainSection>
          <Header />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/story' element={<BundleOfStory />} />
            <Route path='/story-detail' element={<BundleOfStoryDetail />} />
            <Route path='/notice' element={<Notice />} />
            <Route path='/notice-detail' element={<NoticeDetail />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/send-opinion' element={<SendOpinion />} />
          </Routes>
        </MainSection>
      </RouterContainer>
    </BrowserRouter>
  );
};

const RouterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const MainSection = styled.div`
  width: 23.4rem;
  margin: auto;
  background-color: ${Theme.colors.white};
`;
export default Router;
