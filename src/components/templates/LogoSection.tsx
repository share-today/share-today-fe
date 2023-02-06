import styled from 'styled-components';

const LogoSection = () => {
  return (
    <TitleContainer>
      <TitleH1>하루 공유</TitleH1>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  position: relative;

  width: 25rem;
  height: 10rem;
  left: 16rem;
  top: 15rem;

  background: #ffffff;

  border: 1px solid #2b2b2b;
  text-align: center;
`;

const TitleH1 = styled.h1`
  font-family: 'Cafe24 Ssurround';
  font-style: normal;
  font-weight: 700;
  font-size: 5rem;
  line-height: 10rem;
`;
export default LogoSection;
