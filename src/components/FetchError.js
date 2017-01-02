import React from 'react';

const FetchError = ({message, onRetry}) => (
  <div>
    <p>couldn't fetch todos. {message}</p>
    <button onClick={onRetry}>retry</button>
  </div>
);

export default FetchError;