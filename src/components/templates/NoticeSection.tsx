import { useState } from 'react';
import styled from 'styled-components';
import Theme from '../../styles/Theme';
import ListBox from '../molecules/ListBox';
import NavBar from '../organisms/NavBar';

const navMenu = ['알림'];

const NoticeSection = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <NoticeSectionWrap>
      <NavBar
        navMenu={navMenu}
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
        isHighlight={false}
      />
      <ListBox />
    </NoticeSectionWrap>
  );
};

const NoticeSectionWrap = styled.div`
  height: 91vh;
  margin: auto;
  background-color: ${Theme.colors.white};
`;

export default NoticeSection;
