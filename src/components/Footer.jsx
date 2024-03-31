import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}. Made by Bikal Adhiakri.</p>
    </footer>
  );
};

export default Footer;
