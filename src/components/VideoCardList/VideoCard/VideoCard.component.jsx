import React from 'react';

import { Avatar, CardContent } from '@material-ui/core';

import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { CardImg, CardTitle, StyledCard, StyledCardHeader } from './VideoCard.styled';
import { useAppContext } from '../../../state/AppProvider';

function VideoCard({ id, img, title, description, channel, publishedAt, fromFav }) {
  const history = useHistory();
  const { state } = useAppContext();

  const goToVideo = async (videoId) => {
    if (fromFav) {
      history.push(`/favorites/${videoId}`);
    } else {
      history.push(`/video/${videoId}`);
    }
  };

  return (
    <StyledCard
      key={id}
      role="listitem"
      onClick={() => goToVideo(id)}
      style={{
        backgroundColor: state.theme.itemBackground,
        color: state.theme.fontColor,
      }}
    >
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
