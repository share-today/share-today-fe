import styled from 'styled-components';
import SendFooter from '../molecules/SendFooter';
import Date from '../molecules/Date';

const MyToday = () => {
  return (
    <MyTodayContainer>
      <Date date='23년 00월 00일' />
      <Input placeholder='누군가에게 털어놓고 싶은 일이 있었나요?' />
      <SendFooter currentLimit={0} totalLimit={100} />
    </MyTodayContainer>
  );
};

const MyTodayContainer = styled.div`
  width: 20.4rem;
  height: 20.4rem;
  background: linear-gradient(180deg, #e7edff 0%, #d8e3fe 100%);
  border-radius: 0.5rem;
  margin: auto;
  padding: 1.8rem;
`;

const Input = styled.textarea`
  width: 17.5rem;
  height: 11.8rem;
  border: none;
  background: transparent;
  margin-top: 1.5rem;
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
export default MyToday;
