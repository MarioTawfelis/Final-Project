import React from 'react';
import '../assets/styles/ErrorStyle.css'; // Import your CSS file


const Error404 = () => {
  return (
    <div className="error-page">
      <h1 className="error-title">Oops!</h1>
      <h2 className="error-subtitle">404 Page Not Found</h2>
      <p className="error-message">We're sorry, but the page you requested could not be found.</p>
      <p>Please check your URL and try again, or click one of the links below to go back to our website.</p>
      <ul className="error-links">
        <li><a href="/">Home</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Error404;
