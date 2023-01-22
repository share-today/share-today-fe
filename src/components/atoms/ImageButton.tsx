import styled from 'styled-components';
import apple from '../../assets/apple.png';
import talk from '../../assets/talk.png';

type Props = {
  children: React.ReactNode;
  color?: string;
  width: number;
  height: number;
  imgType: string;
};

export const ImageButton = styled.button<Props>`
  background-color: ${(props) => (props.color ? props.color : 'transparent')};
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;
  background-image: url(${(props) =>
    props.imgType === 'talk' ? `${talk}` : `${apple}`})
  background-repeat: no-repeat;
  border-radius: 4px;
  margin-bottom: 16px;
`;
