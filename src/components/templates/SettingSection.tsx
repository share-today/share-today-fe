import { useState } from 'react';
import styled from 'styled-components';
import Theme from '../../styles/Theme';
import NavBar from '../organisms/NavBar';
import { Text } from '../atoms/Text';
import { useNavigate } from 'react-router-dom';

const SettingSection = () => {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState<number>(0);

  const moveToPage = () => {
    navigate('/send-opinion');
  };

  return (
    <SettingSectionContainer>
      <NavBar
        navMenu={['시스템 설정']}
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
        isHighlight={false}
      />
      <CustomText>알림</CustomText>
      <NavBar
        navMenu={['고객 센터']}
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
        isHighlight={false}
      />
      <CustomText onClick={moveToPage}>의견 보내기</CustomText>
      <CustomText>FAQ</CustomText>
      <CustomText>응원하기</CustomText>
      <NavBar
        navMenu={['앱 정보']}
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
        isHighlight={false}
      />
      <CustomText>이용 약관</CustomText>
      <CustomText>개인정보 처리 방침</CustomText>
      <CustomText>오픈소스 라이센스</CustomText>

      <Section>
        <CustomText>앱 버전</CustomText>
        <CustomText>로그아웃</CustomText>
        <CustomText>회원 탈퇴</CustomText>
      </Section>
    </SettingSectionContainer>
  );
};
const SettingSectionContainer = styled.div`
  height: 91vh;
  margin: auto;
  background-color: ${Theme.colors.white};
`;

const CustomText = styled(Text)`
  font-family: 'Cafe24 Ssurround air';
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5rem;

  color: ${Theme.colors.black};
  margin: 1.75rem 0 0 2.25rem;
  cursor: pointer;
`;

const Section = styled.section`
  margin-top: 3rem;
`;
export default SettingSection;
