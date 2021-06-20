import React from 'react';
import ErrorIcon from '@material-ui/icons/Error';

function EmptyState() {
  return (
    <div>
      <ErrorIcon />
      <h3>No videos to show</h3>
    </div>
  );
}

export default EmptyState;
