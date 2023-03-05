import { useState } from 'react';
import styled from 'styled-components';
import Theme from '../../styles/Theme';
import SendFooter from '../molecules/SendFooter';
import NavBar from '../organisms/NavBar';

const navMenu = ['의견 보내기'];

const SendOpinionSection = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <SendOpinionSectionContainer>
      <NavBar
        navMenu={navMenu}
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
        isHighlight={false}
      />

      <SendOpinionContainer>
        <Input placeholder='앱의 발전을 위해 좋은 의견 많이 부탁드려요. :)' />
        <SendFooter currentLimit={0} totalLimit={100} />
      </SendOpinionContainer>
    </SendOpinionSectionContainer>
  );
};

const SendOpinionSectionContainer = styled.div`
  height: 91vh;
  margin: auto;
  background-color: ${Theme.colors.white};
`;

const SendOpinionContainer = styled.div`
  width: 20.4rem;
  height: 18.4rem;
  background: linear-gradient(180deg, #f4f4f4 0%, #ebebeb 100%);
  border-radius: 0.5rem;
  margin: 1rem auto;
  padding: 1.8rem;
`;

const Input = styled.textarea`
  width: 17.5rem;
  height: 11.8rem;
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
export default SendOpinionSection;
