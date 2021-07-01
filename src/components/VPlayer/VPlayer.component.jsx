import React from 'react';
import { CircularProgress } from '@material-ui/core';
import {
  RelatedVideoListContainer,
  VideoLayout,
  VPlayerContainer,
} from './VPlayer.styled';
import useYoutubeAPI from '../../hooks/useYoutubeAPI';
import RelatedVideosCardList from '../RelatedVideosCardList';

const VPlayer = ({ videoDetail, id }) => {
  const { snippet } = videoDetail?.items ? videoDetail?.items[0] : { snippet: null };
  const relatedVideosURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&relatedToVideoId=${id}`;
  const [relatedVideosLoading, relatedVideos, errorRelatedVideos] = useYoutubeAPI(
    relatedVideosURL
  );

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
        <h1>{snippet?.title}</h1>
        <small style={{ whiteSpace: 'pre-wrap', padding: '15px' }}>
          {snippet?.description}
        </small>
      </VideoLayout>
      <RelatedVideoListContainer>
        {relatedVideosLoading || errorRelatedVideos ? (
          <CircularProgress disableShrink />
        ) : (
          <RelatedVideosCardList relatedVideos={relatedVideos} />
        )}
      </RelatedVideoListContainer>
    </VPlayerContainer>
  );
};
export default VPlayer;
