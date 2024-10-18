import React from "react";
import InstagramIcon from "./icons/InstagramIcon";

const Footer = () => {
  return (
    <footer className="bg-custom-purple-100 gap-5 py-10 flex flex-col px-4 md:px-20 text-white">
      <a target="_blank" href="" className="no-underline">
        <InstagramIcon />
      </a>

      <p>© 2024 Shortlet Portharcourt All rights reserved.</p>
    </footer>
  );
};

export default Footer;
