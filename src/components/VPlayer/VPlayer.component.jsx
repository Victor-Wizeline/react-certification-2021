import React, { useEffect, useState } from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import {
  StyledFav,
  RelatedVideoListContainer,
  VideoLayout,
  VPlayerContainer,
} from './VPlayer.styled';
import useYoutubeAPI from '../../hooks/useYoutubeAPI';
import RelatedVideosCardList from '../RelatedVideosCardList';
import { useAppContext } from '../../state/AppProvider';
import { removeFromFavorites, addToFavorites, checkIfFavorite } from '../../utils/fns';

const VPlayer = ({ videoDetail, id }) => {
  const { state } = useAppContext();
  const { authenticated } = state;
  const [isFavorite, setFavorite] = useState(false);

  const { pathname } = useLocation();
  const favPage = pathname.split('/')[1] === 'favorites';

  useEffect(() => {
    setFavorite(checkIfFavorite(id));
  }, [isFavorite, id]);

  const { snippet, kind, etag } = videoDetail?.items
    ? videoDetail?.items[0]
    : { snippet: null, kind: null };
  const relatedVideosURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&relatedToVideoId=${id}`;
  const [relatedVideosLoading, relatedVideos, errorRelatedVideos] = useYoutubeAPI(
    relatedVideosURL,
    favPage
  );

  const handleFavorite = () => {
    try {
      if (isFavorite) {
        removeFromFavorites(id);
      } else {
        const video = {
          fromFav: true,
          etag,
          id: {
            kind,
            videoId: id,
          },
          snippet,
        };
        addToFavorites(video);
      }

      setFavorite(!isFavorite);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <VPlayerContainer>
      <VideoLayout>
        <iframe
          title={`video#${id}`}
          height="612"
          src={`//www.youtube.com/embed/${id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        {authenticated && (
          <Button onClick={handleFavorite}>
            {isFavorite ? 'Remove From ' : 'Add to '} favorites
            <StyledFav />
          </Button>
        )}
        <h1>{snippet?.title}</h1>
        <small style={{ whiteSpace: 'pre-wrap', padding: '15px' }}>
          {snippet?.description}
        </small>
      </VideoLayout>
      <RelatedVideoListContainer>
        {relatedVideosLoading || errorRelatedVideos ? (
          <CircularProgress disableShrink />
        ) : (
          <RelatedVideosCardList relatedVideos={relatedVideos} fromFav={favPage} />
        )}
      </RelatedVideoListContainer>
    </VPlayerContainer>
  );
};
export default VPlayer;
