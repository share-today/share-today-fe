import ListBox from '../molecules/ListBox';
import NavBar from '../organisms/NavBar';

const navMenu = ['알림'];

const NoticeSection = () => {
  return (
    <>
      <NavBar navMenu={navMenu} />
      <ListBox />
    </>
  );
};

export default NoticeSection;
