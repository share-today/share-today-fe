import styled from 'styled-components';

const SomeonesYesterday = () => {
  return (
    <SomeonesYesterdayContainer>
      <ContentContainer>
        <Content />
        <Comment />
      </ContentContainer>
    </SomeonesYesterdayContainer>
  );
};

const SomeonesYesterdayContainer = styled.section`
  margin: auto;
  width: 20.4rem;
`;

const ContentContainer = styled.div`
  position: relative;
  height: 26.3rem;
  background: linear-gradient(180deg, #ffe7e7 0%, #fed8d8 100%);
  border-radius: 0.5rem;
  margin-top: 1rem;
`;

const Content = styled.div`
  position: absolute;
  width: 18.4rem;
  height: 10.7rem;
  top: 1.5rem;
  right: 1rem;
  border-radius: 0.5rem;
  border: none;
`;

const Comment = styled.input`
  position: absolute;
  width: 18.4rem;
  height: 10.7rem;
  bottom: 1.5rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 0.5rem;
  border: none;
`;
export default SomeonesYesterday;
