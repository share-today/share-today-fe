import styled from 'styled-components';
import Theme from '../../styles/Theme';

const BundleOfStorySection = () => {
  console.log(new Date());
  const renderDate = () => {
    const days: any[] = [];
    const date = ['일', '월', '화', '수', '목', '금', '토'];

    for (let i = 0; i < 7; i++) {
      days.push(<DayItem key={i}>{date[i]}</DayItem>);
    }

    return <Day>{days}</Day>;
  };

  return (
    <BundleOfStoryContainer>
      <Container>
        <Year>2022년 11월</Year>
        {renderDate()}
      </Container>
    </BundleOfStoryContainer>
  );
};
const BundleOfStoryContainer = styled.div`
  height: 91vh;
  margin: auto;
  background-color: ${Theme.colors.white};
`;

const Container = styled.div`
  width: 20rem;
  height: 18.5rem;

  background-color: gray;
  margin: 3.5rem auto 0 auto;
`;

const Year = styled.div`
  height: 24px;

  margin-bottom: 27px;

  font-family: 'Cafe24 Ssurround';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: #2b2b2b;
`;

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

export default BundleOfStorySection;
