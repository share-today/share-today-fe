import styled from 'styled-components';
import send from '../../assets/images/send.png';

type Props = {
  currentLimit: number;
  totalLimit: number;
};

const SendFooter = (props: Props) => {
  return (
    <SendFooterContainer>
      <TextLimit>
        {props.currentLimit} / {props.totalLimit}
      </TextLimit>

      <SendContainer onClick={() => console.log('Click Send!!')}>
        <Send>보내기</Send>
        <SendImg src={send} alt='send' />
      </SendContainer>
    </SendFooterContainer>
  );
};

const SendFooterContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 20.4rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1.8rem;
`;

const SendContainer = styled.div`
  display: flex;
  cursor: pointer;
`;

const TextLimit = styled.span`
  font-family: 'Cafe24 Ssurround air';
  font-style: normal;
  font-weight: 300;
  font-size: 0.75rem;
  text-decoration-line: underline;
  color: #2b2b2b;
`;

const Send = styled.span`
  font-family: 'Cafe24 Ssurround';
  font-style: normal;
  font-weight: 700;
  font-size: 0.87rem;
  color: #979797;
  margin-right: 0.6rem;
`;

const SendImg = styled.img`
  width: 1rem;
  height: 1rem;
  bottom: 0.15rem;
`;
export default SendFooter;
