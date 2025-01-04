import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './style.css';

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-subtitle">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Button type="primary" size="large" onClick={goHome}>
          Back to Home
        </Button>
      </div>
      <div className="not-found-animation">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </div>
  );
};

export default NotFound;
