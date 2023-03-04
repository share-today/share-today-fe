import styled from 'styled-components';
import Date from '../molecules/Date';
import LikeAndMore from '../molecules/LikeAndMore';
import MainContent from '../molecules/MainContent';
import SendFooter from '../molecules/SendFooter';

const SomeonesYesterday = () => {
  return (
    <SomeonesYesterdayContainer>
      <ContentContainer>
        <Date date='22년 00월 00일' />
        <MainContent
          content={`오늘은 상사에게 후배에게 하루종일 시달려서 지쳤어요. 
          중간에 껴서 새우등 터지고 있는데 어디가서 말해봤자 제 이미지만 안좋아지겠죠?`}
        />
        <LikeAndMore isLike={true} />
      </ContentContainer>

      <CommentContainer>
        <Input placeholder='누군가에게 들려고 싶은 한마디가 있나요?' />
        <SendFooter currentLimit={0} totalLimit={50} />
      </CommentContainer>
    </SomeonesYesterdayContainer>
  );
};

const SomeonesYesterdayContainer = styled.section`
  margin: auto;
  width: 20.4rem;
  position: relative;
`;

const ContentContainer = styled.div`
  height: 26.3rem;
  background: linear-gradient(180deg, #ffe7e7 0%, #fed8d8 100%);
  border-radius: 0.5rem;
  margin-top: 1rem;
  padding: 1.8rem;
`;

const CommentContainer = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 1rem;
  width: 18.4rem;
  height: 10.75rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 0.5rem;
  margin: auto;
  padding-top: 1.8rem;
`;

const Input = styled.textarea`
  width: 15.5rem;
  height: 4.5rem;
  border: none;
  background: transparent;
  resize: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: 'Cafe24 Ssurround air';
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    color: #979797;
  }
`;

export default SomeonesYesterday;
