import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  Text,
  Thumbnail,
  Title,
  Description,
  Content,
} from './RelatedVideoCard.styled';

const RelatedVideoCard = ({ title, description, thumbnail, id }) => {
  const history = useHistory();

  const goVideo = async (videoId) => {
    history.push(`/video/${videoId}`);
  };
  return (
    <Card data-testid={id} onClick={() => goVideo(id)}>
      <Content>
        <Thumbnail style={{ backgroundImage: `url(${thumbnail})` }} />
        <Text>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Text>
      </Content>
    </Card>
  );
};

export default RelatedVideoCard;
