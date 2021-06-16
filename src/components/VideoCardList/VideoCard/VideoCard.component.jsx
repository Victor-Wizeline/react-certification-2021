import React from 'react';

import { Avatar, CardContent } from '@material-ui/core';

import moment from 'moment';
import { CardImg, CardTitle, StyledCard, StyledCardHeader } from './VideoCard.styled';

function VideoCard({ id, img, title, description, channel, publishedAt }) {
  return (
    <StyledCard key={id} role="listitem">
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
