import styled from 'styled-components';

const NoticeDetail = () => {
  return (
    <NoticeDetailContainer>
      <Title>
        <span>00월 00일</span>
      </Title>
      <div>
        <span>
          📢 좋은 소식이 있어요! 클릭하여 확인해 주세요! 안녕하세요. 여러분
          하루공유가 정말 좋은 소식을 들려주려 합니다. OO 이벤트를 통해 좀 더
          여러분의 하루를 풍요롭게 하려 합니다. 참여 방법은 하단에 더욱 자세히
          나와있으니 참고 부탁드려요.
        </span>
      </div>
    </NoticeDetailContainer>
  );
};

const NoticeDetailContainer = styled.div`
  width: 327px;
  height: 250px;

  top: 20px;
  left: 24px;
  border: 1px solid gray;
  border-radius: 8px;
  padding: 16px 16px 20px 16px;
`;

const Title = styled.div``;

export default NoticeDetail;
