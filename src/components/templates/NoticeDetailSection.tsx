import { useState } from 'react';
import styled from 'styled-components';
import Theme from '../../styles/Theme';
import ListBox from '../molecules/ListBox';
import NavBar from '../organisms/NavBar';

const navMenu = ['알림'];

const NoticeDetailSection = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  return (
    <NoticeSectionWrap>
      <NavBar navMenu={navMenu} tabIndex={tabIndex} setTabIndex={setTabIndex} />
      <ListBox />
    </NoticeSectionWrap>
  );
};

const NoticeSectionWrap = styled.div`
  height: 91vh;
  margin: auto;
  background-color: ${Theme.colors.white};
`;

const NoticeSectionContainer = styled.div`
  text-align: center;
`;

// const NoticeDetailContainer = styled.div`
//   width: 327px;
//   height: 250px;

//   top: 20px;
//   left: 24px;
//   border: 1px solid gray;
//   border-radius: 8px;
//   padding: 16px 16px 20px 16px;
// `;

const Title = styled.div``;

export default NoticeDetailSection;
