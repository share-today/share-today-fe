import styled from 'styled-components';

type Props = {
  content: string;
};
const MainContent = (props: Props) => {
  return <MainContentContainer>{props.content}</MainContentContainer>;
};

const MainContentContainer = styled.div`
  margin-top: 1.5rem;
  font-family: 'Cafe24 Ssurround air';
  font-style: normal;
  font-weight: 300;
  line-height: 1.5rem;
  font-size: 1rem;
  text-align: left;
  color: #2b2b2b;
`;
export default MainContent;
