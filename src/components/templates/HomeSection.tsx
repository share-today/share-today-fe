import { useCallback, useState } from 'react';
import styled from 'styled-components';
import Theme from '../../styles/Theme';
import MyToday from '../organisms/MyToday';
import MyYesterday from '../organisms/MyYesterday';
import NavBar from '../organisms/NavBar';
import SomeonesYesterday from '../organisms/SomeonesYesterday';

const navMenu = ['나의 오늘', '나의 어제', '누군가의 어제'];

const HomeSection = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const changeTabView = useCallback(() => {
    if (tabIndex === 0) {
      return <MyToday />;
    }

    if (tabIndex === 1) {
      return <MyYesterday />;
    }

    if (tabIndex === 2) {
      return <SomeonesYesterday />;
    }
  }, [tabIndex]);

  return (
    <HomeSectionWrap>
      <NavBar
        navMenu={navMenu}
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
        isHighlight={true}
      />
      <HomeSectionContainer>{changeTabView()}</HomeSectionContainer>
    </HomeSectionWrap>
  );
};

const HomeSectionWrap = styled.div`
  height: 91vh;
  margin: auto;
  background-color: ${Theme.colors.white};
`;

const HomeSectionContainer = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

export default HomeSection;
