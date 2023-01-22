import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BundleOfStory from './pages/BundleOfStory';
import BundleOfStoryDetail from './pages/BundleOfStoryDetail';
import Home from './pages/Home';
import Login from './pages/Login';
import Notice from './pages/Notice';
import NoticeDetail from './pages/NoticeDetail';
import Setting from './pages/Setting';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/story' element={<BundleOfStory />} />
        <Route path='/story-detail' element={<BundleOfStoryDetail />} />
        <Route path='/notice' element={<Notice />} />
        <Route path='/notice-detail' element={<NoticeDetail />} />
        <Route path='/setting' element={<Setting />} />
        {/* <Route
          path='/login'
          element={() => (isLogin ? <Redirect to='/' /> : <Login />)}
        /> */}
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
