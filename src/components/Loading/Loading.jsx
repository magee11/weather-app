import React, { useState, useEffect } from 'react';
import './loading.css';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null
  }

  return (
    <div className="loading-screen">
      <img src="https://cdn.dribbble.com/users/28455/screenshots/1389791/weather.gif" alt="Loading" />
    </div>
  );
};

export default LoadingScreen;
