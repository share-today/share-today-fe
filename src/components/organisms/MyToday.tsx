import styled from 'styled-components';
import SendFooter from '../molecules/SendFooter';

const MyToday = () => {
  return (
    <>
      <Input />
      <SendFooter />
    </>
  );
};

const Input = styled.input`
  width: 20.4rem;
  height: 20.4rem;
  margin-top: 1rem;
  background: linear-gradient(180deg, #e7edff 0%, #d8e3fe 100%);
  border-radius: 0.5rem;
  border: none;

  &:focus {
    outline: none;
  }
`;
export default MyToday;
