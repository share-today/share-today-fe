import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  color?: string;
};

export const Text = styled.p<Props>`
  color: ${(props) => (props.color ? props.color : 'black')};
  margin: 16px;
`;
