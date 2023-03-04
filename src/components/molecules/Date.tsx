import styled from 'styled-components';

type Props = {
  date: string;
};
const Date = (props: Props) => {
  return <DateContainer>{props.date}</DateContainer>;
};

const DateContainer = styled.p`
  text-align: left;
  font-family: 'Cafe24 Ssurround air';
  font-style: normal;
  font-weight: 300;
  font-size: 0.75rem;
  line-height: 0.87rem;
  color: #2b2b2b;
`;
export default Date;
