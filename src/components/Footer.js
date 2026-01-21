import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Sridhar Kumar. Built with React & ❤️</p>
    </footer>
  );
};

export default Footer;
