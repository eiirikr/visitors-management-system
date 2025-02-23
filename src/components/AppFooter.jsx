import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 position-fixed bottom-0 w-100">
      <p className="mb-0">
        &copy; {new Date().getFullYear()} DICT Isabela Provincial Office. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
