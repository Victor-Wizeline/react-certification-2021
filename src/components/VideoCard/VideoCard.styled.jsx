import styled from 'styled-components';
import { Card, CardHeader, CardMedia } from '@material-ui/core';

export const StyledCard = styled(Card)`
  width: 325px;
  margin: 0 15px 20px;
  position: relative;
`;

export const CardImg = styled(CardMedia)`
  padding-top: 55%;
`;

export const CardTitle = styled.h4`
  margin: 5px 0;
`;

export const StyledCardHeader = styled(CardHeader)`
  text-align: right;
  padding: 6px;
  justify-content: right;
  display: flex;
`;
