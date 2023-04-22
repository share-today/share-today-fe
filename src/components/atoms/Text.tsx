import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  color?: string;
};

export const Text = styled.p<Props>`
  font-family: 'Cafe24 Ssurround';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  color: ${(props) => (props.color ? props.color : 'black')};
`;
