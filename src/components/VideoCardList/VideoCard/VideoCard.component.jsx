import React from 'react';

import { Avatar, CardContent } from '@material-ui/core';

import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { CardImg, CardTitle, StyledCard, StyledCardHeader } from './VideoCard.styled';

function VideoCard({ id, img, title, description, channel, publishedAt }) {
  const history = useHistory();

  const goToVideo = async (videoId) => {
    history.push(`/video/${videoId}`);
  };

  return (
    <StyledCard key={id} role="listitem" onClick={() => goToVideo(id)}>
      <CardImg image={img} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <small>{description}</small>
        <StyledCardHeader
          avatar={
            <Avatar aria-label="channel" align="right">
              {channel.charAt(0)}
            </Avatar>
          }
          title={channel}
          subheader={moment(publishedAt).fromNow()}
        />
      </CardContent>
    </StyledCard>
  );
}

export default VideoCard;
