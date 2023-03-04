import styled from 'styled-components';
import LikeAndMore from '../molecules/LikeAndMore';
import Date from '../molecules/Date';
import MainContent from '../molecules/MainContent';
import Comment from '../molecules/Comment';

const MyYesterday = () => {
  return (
    <MyYesterdayContainer>
      <ContentContainer>
        <Date date='22년 00월 00일' />
        <MainContent
          content={`오늘은 상사에게 후배에게 하루종일 시달려서 지쳤어요. 
          중간에 껴서 새우등 터지고 있는데 어디가서 말해봤자 제 이미지만 안좋아지겠죠?`}
        />
        <LikeAndMore isLike={false} />
      </ContentContainer>
      <CommentContainer>
        <Comment
          comment={`모두가 당신의 힘든 점들을 모를 거라 생각하겠지만, 누군가는 분명 알고 있을 거에요.`}
        />
        <LikeAndMore isLike={true} />
      </CommentContainer>
    </MyYesterdayContainer>
  );
};

const MyYesterdayContainer = styled.section`
  margin: auto;
  width: 20.4rem;
`;

const ContentContainer = styled.div`
  background: linear-gradient(180deg, #e7edff 0%, #d8e3fe 100%);
  border-radius: 0.5rem;
  margin-top: 1rem;
  margin: auto;
  padding: 1.8rem;
`;

const CommentContainer = styled.div`
  height: 8.2rem;

  background: rgba(255, 255, 255, 0.8);

  border: 1px solid #bebebe;
  border-radius: 0.5rem;
  margin-top: 1rem;
  padding: 1.56rem;
`;

export default MyYesterday;
