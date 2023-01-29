import styled from 'styled-components';
import NavBar from '../organisms/NavBar';

const navMenu = ['나의 오늘', '나의 어제', '누군가의 어제'];

const HomeSection = () => {
  return (
    <>
      <NavBar navMenu={navMenu} />
      <HomeSectionContainer>
        <Input />
      </HomeSectionContainer>
    </>
  );
};
const HomeSectionContainer = styled.div`
  padding: 2rem 3rem;
`;

const Input = styled.input`
  width: 100%;
  height: 327px;
  background: linear-gradient(180deg, #e7edff 0%, #d8e3fe 100%);
  border-radius: 8px;
  border: none;
`;
export default HomeSection;
