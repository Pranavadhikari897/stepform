import React from 'react';

const Result = ({ values }) => {
  return (
    <div>
      <h2>Form Submitted</h2>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
};

export default Result;
