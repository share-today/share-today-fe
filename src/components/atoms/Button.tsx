import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  color?: string;
  width: number;
  height: number;
};

export const Button = styled.button<Props>`
  background-color: ${(props) => (props.color ? props.color : 'transparent')};
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;
