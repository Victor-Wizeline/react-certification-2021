import styled from 'styled-components';
import { Card, CardHeader, CardMedia } from '@material-ui/core';

export const StyledCard = styled(Card)`
  width: 325px;
  margin: 0 15px 20px;
  position: relative;
  &:hover {
    box-shadow: -1px 10px 29px 0px rgba(0, 0, 0, 0.8);
    cursor: pointer;
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
