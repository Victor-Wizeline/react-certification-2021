import React from 'react';
import { CircularProgress } from '@material-ui/core';

function LoadingOverlay() {
  return <CircularProgress disableShrink />;
}

export default LoadingOverlay;
