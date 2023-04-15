import styled from 'styled-components';
import { format } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';

type Props = {
  currentDate: Date;
  selectedDate: Date;
};

const CalenderBody = (props: Props) => {
  const monthStart = startOfMonth(props.currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows: any[] = [];
  let days: any[] = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, 'd');
      days.push(
        <Col
          className={`col cell ${
            !isSameMonth(day, monthStart)
              ? 'disabled'
              : isSameDay(day, props.selectedDate)
              ? 'selected'
              : 'not-valid'
          }`}
        >
          <span
            className={
              format(props.currentDate, 'M') !== format(day, 'M')
                ? 'text not-valid'
                : isSameMonth(day, monthStart) &&
                  isSameDay(day, props.selectedDate)
                ? 'text today'
                : ''
            }
          >
            {formattedDate}
          </span>
        </Col>
      );
      day = addDays(day, 1);
    }
    rows.push(<Row className='row'>{days}</Row>);
    days = [];
  }
  return <Body className='body'>{rows}</Body>;
};

const Body = styled.div`
  margin-top: 15px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 10px 10px;
`;

const Col = styled.div`
  font-family: 'Cafe24 Ssurround air';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;

  text-align: center;

  color: #979797;
`;
export default CalenderBody;
