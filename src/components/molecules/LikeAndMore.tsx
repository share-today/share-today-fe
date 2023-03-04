import styled from 'styled-components';
import more from '../../assets/images/more.png';
import like from '../../assets/images/like.png';

type Props = {
  isLike: boolean;
};

const LikeAndMore = (props: Props) => {
  return (
    <ImgView>
      {props.isLike ? <LikeImg src={like} alt='like' /> : null}
      <MoreImg src={more} alt='more' />
    </ImgView>
  );
};

const ImgView = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.06rem;
`;

const LikeImg = styled.img`
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 20px;
`;

const MoreImg = styled.img`
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
`;
export default LikeAndMore;
