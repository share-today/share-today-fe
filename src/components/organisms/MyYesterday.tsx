import styled from 'styled-components';
import LikeAndMore from '../molecules/LikeAndMore';

const MyYesterday = () => {
  return (
    <MyYesterdayContainer>
      <ContentContainer>
        <Date>00년 00월 00일</Date>
        <Content>
          {`오늘은 상사에게 후배에게 하루종일 시달려서 지쳤어요. 
          중간에 껴서 새우등 터지고 있는데 어디가서 말해봤자 제 이미지만 안좋아지겠죠?`}
        </Content>
        <LikeAndMore isLike={false} />
      </ContentContainer>
      <CommentContainer>
        <Comment>{`모두가 당신의 힘든 점들을 모를 거라 생각하겠지만, 누군가는 분명 알고 있을 거에요.`}</Comment>
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

const Date = styled.p`
  text-align: left;
  font-family: 'Cafe24 Ssurround air';
  font-style: normal;
  font-weight: 300;
  font-size: 0.75rem;
  line-height: 0.87rem;
  color: #2b2b2b;
`;

const Content = styled.div`
  margin-top: 1.5rem;
  font-family: 'Cafe24 Ssurround air';
  font-style: normal;
  font-weight: 300;
  line-height: 1.5rem;
  font-size: 1rem;
  text-align: left;
  color: #2b2b2b;
`;

const CommentContainer = styled.div`
  height: 8.2rem;

  background: rgba(255, 255, 255, 0.8);

  border: 1px solid #bebebe;
  border-radius: 0.5rem;
  margin-top: 1rem;
  padding: 1.56rem;
`;

const Comment = styled.div`
  font-family: 'Cafe24 Ssurround air';
  font-style: normal;
  font-weight: 300;
  font-size: 0.87rem;
  text-align: left;
  line-height: 1.37rem;
  color: #2b2b2b;
`;

export default MyYesterday;
