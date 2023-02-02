import styled from 'styled-components';
import NavBar from '../organisms/NavBar';

const navMenu = ['나의 오늘', '나의 어제', '누군가의 어제'];

const HomeSection = () => {
  return (
    <HomeSectionWrap>
      <NavBar navMenu={navMenu} />
      <HomeSectionContainer>
        <Input />
      </HomeSectionContainer>
    </HomeSectionWrap>
  );
};

const HomeSectionWrap = styled.div`
  width: 23.4rem;
  height: 91vh;
  margin: auto;
`;

const HomeSectionContainer = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const Input = styled.input`
  width: 20.4rem;
  height: 20.4rem;
  background: linear-gradient(180deg, #e7edff 0%, #d8e3fe 100%);
  border-radius: 8px;
  border: none;
`;
export default HomeSection;
