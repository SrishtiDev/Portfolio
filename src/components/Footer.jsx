import React from 'react';

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center py-16 text-gray-400">
      <div className="text-center font-sans text-sm">
        Copyright © 2024-{new Date().getFullYear()} Srishti Rawat. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
