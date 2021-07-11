import React from 'react';
import styled from 'styled-components';

const BlurBG = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const BlurEffect = (props) => {
  return (
    <>
      {props.show ? (
        <BlurBG role="button" data-testid="blurbg" onClick={props.onClick} />
      ) : null}
    </>
  );
};
export default BlurEffect;
