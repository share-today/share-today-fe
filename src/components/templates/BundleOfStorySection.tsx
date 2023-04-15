import styled from 'styled-components';
import Theme from '../../styles/Theme';
import CalenderBody from '../organisms/CalenderBody';
import CalenderDays from '../organisms/CalenderDays';
import CalenderHeader from '../organisms/CalenderHeader';

const BundleOfStorySection = () => {
  console.log(new Date());
  const currentDate = new Date();
  const selectedDate = new Date();

  return (
    <BundleOfStoryContainer>
      <Container>
        <CalenderHeader currentDate={currentDate} />
        <CalenderDays />
        <CalenderBody currentDate={currentDate} selectedDate={selectedDate} />
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

  margin: 3.5rem auto 0 auto;
`;

export default BundleOfStorySection;
