import React from 'react';

import VideoCard from './VideoCard/VideoCard.component';
import { VideoCardListStyled } from './VideoCardList.styled';

const VideoCardList = (props) => {
  const displayVideos = (items) => {
    let cardVideos = [];
    if (items) {
      cardVideos = items.map((video) => {
        const { id, snippet } = video;
        const { thumbnails, description, channelTitle, title, publishedAt } = snippet;
        const img = thumbnails && thumbnails.high && thumbnails.high.url;
        return (
          <VideoCard
            key={video.etag}
            id={id.videoId}
            img={img}
            title={title}
            description={description}
            channel={channelTitle}
            publishedAt={publishedAt}
          />
        );
      });
    }
    return cardVideos;
  };

  return (
    <VideoCardListStyled role="list">
      {displayVideos(props.collection)}
    </VideoCardListStyled>
  );
};

export default VideoCardList;
