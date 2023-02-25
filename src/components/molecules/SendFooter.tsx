import styled from 'styled-components';
import send from '../../assets/images/send.png';

const SendFooter = () => {
  return (
    <SendFooterContainer>
      <div>0/100</div>

      <Test>
        <div>보내기</div>
        <img src={send} alt='send' />
      </Test>
    </SendFooterContainer>
  );
};

const SendFooterContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 20.4rem;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
`;

const Test = styled.div`
  display: flex;
`;
export default SendFooter;
