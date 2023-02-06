import styled from 'styled-components';

const MyYesterday = () => {
  return (
    <MyYesterdayContainer>
      <Content />
      <Comment />
    </MyYesterdayContainer>
  );
};

const MyYesterdayContainer = styled.section`
  margin: auto;
  width: 20.4rem;
`;

const Content = styled.div`
  height: 15.1rem;

  background: linear-gradient(180deg, #e7edff 0%, #d8e3fe 100%);
  border-radius: 0.5rem;
  margin-top: 1rem;
`;

const Comment = styled.div`
  height: 8.2rem;

  background: rgba(255, 255, 255, 0.8);

  border: 1px solid #bebebe;
  border-radius: 0.5rem;
  margin-top: 1rem;
`;
export default MyYesterday;
