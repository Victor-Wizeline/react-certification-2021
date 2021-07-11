import React from 'react';

import { useParams } from 'react-router-dom';
import useYoutubeAPI from '../../hooks/useYoutubeAPI';
import LoadingOverlay from '../../components/LoadingOverlay';
import VPlayer from '../../components/VPlayer';

function VideoPlayer() {
  const { id } = useParams();
  const videoDetailUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}`;
  const [loadingDetail, videoDetail, errorDetail] = useYoutubeAPI(videoDetailUrl, false);
  if (loadingDetail || errorDetail) return <LoadingOverlay />;
  return <VPlayer videoDetail={videoDetail} id={id} />;
}

export default VideoPlayer;
