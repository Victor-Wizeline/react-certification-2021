import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';

export const IconContainer = styled.div`
  padding: 0 6px;
  height: 100%;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 264px;
  position: relative;
  border-radius: 6px;
  background-color: rgb(220, 148, 148);
  border: 1px solid #050505;
  margin: 0 5px;
  display: inline-flex;
  align-items: center;
`;

export const StyledInput = styled(InputBase)`
  color: white;
`;
