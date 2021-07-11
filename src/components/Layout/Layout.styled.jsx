import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  padding: 20px 40px;
  background-color: ${(props) => props.theme.hoverColor};
  height: 100vh;
`;
