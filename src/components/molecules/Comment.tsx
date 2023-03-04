import styled from 'styled-components';

type Props = {
  comment: string;
};

const Comment = (props: Props) => {
  return <CommentContainer>{props.comment}</CommentContainer>;
};

const CommentContainer = styled.div`
  font-family: 'Cafe24 Ssurround air';
  font-style: normal;
  font-weight: 300;
  font-size: 0.87rem;
  text-align: left;
  line-height: 1.37rem;
  color: #2b2b2b;
`;
export default Comment;
