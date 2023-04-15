import styled from 'styled-components';

const CalenderDays = () => {
  const renderDate = () => {
    const days: any[] = [];
    const date = ['일', '월', '화', '수', '목', '금', '토'];

    for (let i = 0; i < 7; i++) {
      days.push(<DayItem key={i}>{date[i]}</DayItem>);
    }

    return <Day>{days}</Day>;
  };

  return <div>{renderDate()}</div>;
};

const Day = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20rem;
  height: 24px;
`;

const DayItem = styled.span`
  font-family: 'Cafe24 Ssurround air';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;

  text-align: center;

  color: #2b2b2b;
`;

export default CalenderDays;
