import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/organisms/Header';
import BundleOfStory from './pages/BundleOfStory';
import BundleOfStoryDetail from './pages/BundleOfStoryDetail';
import Home from './pages/Home';
import LayoutPage from './pages/LayoutPage';
import Login from './pages/Login';
import Notice from './pages/Notice';
import NoticeDetail from './pages/NoticeDetail';
import Setting from './pages/Setting';

const Router = () => {
  return (
    <BrowserRouter>
      <Div>
        <LayoutPage />
        <div>
          <Header />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/story' element={<BundleOfStory />} />
            <Route path='/story-detail' element={<BundleOfStoryDetail />} />
            <Route path='/notice' element={<Notice />} />
            <Route path='/notice-detail' element={<NoticeDetail />} />
            <Route path='/setting' element={<Setting />} />
          </Routes>
        </div>
      </Div>
    </BrowserRouter>
  );
};

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default Router;
