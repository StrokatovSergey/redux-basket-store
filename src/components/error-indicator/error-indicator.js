import React from 'react';
import './error-indicator.css';

const ErrorIndicator = ({errMessage}) => {
  return <div>Error! {errMessage}</div>;
};

export default ErrorIndicator;
