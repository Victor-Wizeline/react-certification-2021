import styled from 'styled-components';
import FavoriteIcon from '@material-ui/icons/Favorite';

export const VPlayerContainer = styled.div`
  display: flex;
  padding: 25px;
`;

export const VideoLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  align-items: initial;
`;

export const RelatedVideoListContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  padding: 0px 48px;
`;

export const StyledFav = styled(FavoriteIcon)`
  color: red;
`;
