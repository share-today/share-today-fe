import { format } from 'date-fns';
import styled from 'styled-components';

type Props = {
  currentMonth: Date;
};

const CalenderHeader = (props: Props) => {
  return (
    <Header>
      {format(props.currentMonth, 'yy')}년 {format(props.currentMonth, 'M')}월
    </Header>
  );
};

const Header = styled.div`
  height: 24px;

  margin-bottom: 27px;

  font-family: 'Cafe24 Ssurround';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: #2b2b2b;
`;
export default CalenderHeader;
