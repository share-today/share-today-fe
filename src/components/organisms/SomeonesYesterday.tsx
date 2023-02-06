import styled from 'styled-components';

const SomeonesYesterday = () => {
  return (
    <SomeonesYesterdayContainer>
      <Content>
        <Comment />
      </Content>
    </SomeonesYesterdayContainer>
  );
};

const SomeonesYesterdayContainer = styled.section`
  margin: auto;
  width: 20.4rem;
`;

const Content = styled.div`
  height: 26.3rem;

  background: linear-gradient(180deg, #ffe7e7 0%, #fed8d8 100%);
  border-radius: 0.5rem;
  margin-top: 1rem;
`;

const Comment = styled.input`
  position: relative;
  width: 18.4rem;
  height: 10.7rem;

  background: rgba(255, 255, 255, 0.8);
  border-radius: 0.5rem;
  border: none;
  top: 24px;
`;
export default SomeonesYesterday;
