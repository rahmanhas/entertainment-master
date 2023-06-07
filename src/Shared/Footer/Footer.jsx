import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <span>&copy; {new Date().getFullYear()} Entertainment Master</span>
      </div>
    </footer>
  );
};

export default Footer;
