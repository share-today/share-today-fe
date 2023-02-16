import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ListBox = () => {
  const navigate = useNavigate();

  const moveToPage = () => {
    navigate('/notice-detail');
  };

  return (
    <ListBoxContainer onClick={moveToPage}>
      <Title>
        <span>5 분전</span>
      </Title>

      <Content>
        <span>❤️ 누군가 당신의 어제에 마음을 보냈어요.</span>
      </Content>
    </ListBoxContainer>
  );
};

const ListBoxContainer = styled.div`
  width: 327px;
  height: 96px;
  top: 20px;
  left: 20px;
  border-radius: 8px;
  padding: 16px 16px 20px 16px;
  background: rgba(235, 235, 235, 0.8);

  cursor: pointer;
`;

const Title = styled.div`
  margin-bottom: 1rem;
`;

const Content = styled.div``;
export default ListBox;
