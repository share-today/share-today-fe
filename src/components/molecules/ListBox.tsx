import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Comment from './Comment';
import Date from './Date';

const ListBox = () => {
  const navigate = useNavigate();

  const moveToPage = () => {
    navigate('/notice-detail');
  };

  return (
    <ListBoxContainer onClick={moveToPage}>
      <DateContainer>
        <Date date='5분전' />
      </DateContainer>

      <Comment comment={`❤️ 누군가 당신의 어제에 마음을 보냈어요.`} />
    </ListBoxContainer>
  );
};

const ListBoxContainer = styled.div`
  width: 327px;
  height: 96px;
  top: 20px;
  border-radius: 8px;
  padding: 16px 16px 20px 16px;
  background: rgba(235, 235, 235, 0.8);
  margin: auto;
  cursor: pointer;
`;

const DateContainer = styled.div`
  margin-bottom: 1rem;s
`;
export default ListBox;
