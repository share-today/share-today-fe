import { addMonths, format } from 'date-fns';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Theme from '../../styles/Theme';
import CalenderBody from '../organisms/CalenderBody';
import CalenderDays from '../organisms/CalenderDays';
import CalenderHeader from '../organisms/CalenderHeader';

const BundleOfStorySection = () => {
  const currentDate = new Date();
  const selectedDate = new Date();

  let currentMonth = new Date(format(currentDate, 'yyyy'));
  let months: any[] = [];

  const monthRef = useRef<HTMLDivElement>(null);

  for (let i = 0; i < 12; i++) {
    months.push(
      <Container
        key={i}
        ref={
          format(currentMonth, 'MM') === format(selectedDate, 'MM')
            ? monthRef
            : null
        }
      >
        <CalenderHeader currentMonth={currentMonth} />
        <CalenderDays />
        <CalenderBody currentMonth={currentMonth} selectedDate={selectedDate} />
      </Container>
    );

    currentMonth = addMonths(currentMonth, 1);
  }

  useEffect(() => {
    if (monthRef.current !== null) {
      monthRef.current.scrollIntoView({ behavior: 'auto' });
    }
  }, []);

  return (
    <BundleOfStoryContainer>
      <div>{months}</div>
    </BundleOfStoryContainer>
  );
};

const BundleOfStoryContainer = styled.div`
  height: 91vh;
  margin: auto;
  background-color: ${Theme.colors.white};
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  width: 20rem;
  height: 18.5rem;

  margin: 3.5rem auto 0 auto;
`;

export default BundleOfStorySection;
